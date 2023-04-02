import React, {useEffect, useMemo, useRef, useState} from 'react'
import {useDownloadExcel} from 'react-export-table-to-excel'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect } from 'react-table'
import {GlobalFilter} from "../Filters/GlobalFilter";
import {ColumnFilter} from "../Filters/ColumnFilter";
import "./Table.css"
import {CheckBox} from "../CheckBox/CheckBox";
import {Box, Button, Tooltip} from "@mui/material";
import {AddCard, Delete, Edit, Send} from "@mui/icons-material";

export const Table = (props) => {

	const data = props.data

	const [isVisible, setIsVisible]= useState(true)
	const tableRef = useRef(null);
	const {onDownload} = useDownloadExcel({
		currentTableRef: tableRef.current,
		filename:props.file,
		sheet:props.sheet
	});

	const updateMyData = (rowIndex, columnId, value) => {
		props.data(old =>
			old.map((row, index) => {
				if (index === rowIndex) {
					return {
						...old[rowIndex],
						[columnId]: value,
					};
				}
				return row;
			})
		);
	};

	const EditableCell = ({
							  value: initialValue,
							  row: { index },
							  column: { id },
							  updateMyData,
						  }) => {
		const [value, setValue] = useState(initialValue);
		const onChange = e => {setValue(e.target.value);};
		const onBlur = () => {updateMyData(index, id, value);};
		useEffect(() => {setValue(initialValue);}, [initialValue]);

		if (id !== "col1") {return <input value={value} onChange={onChange} onBlur={onBlur} />;}
		return value;
	};



	const columns = useMemo(() => props.columns, [props.columns])

	const defaultColumn = useMemo(() => {
		return{
			Filter:ColumnFilter,
		}
	},[]);

	const tableInstance = useTable({
			columns,
			data,
			defaultColumn,
			updateMyData
		},
		useFilters,
		useGlobalFilter,
		useSortBy,
		usePagination,
		useRowSelect,
		(hooks) => {hooks.visibleColumns.push((columns) => {
			return [
				{
					id:'selection',
					Header:({getToggleAllRowsSelectedProps}) => (
						<CheckBox className="checkbox" {...getToggleAllRowsSelectedProps()} />
					),
					Cell: ({row}) => (
						<CheckBox className="checkbox" {...row.getToggleRowSelectedProps()}/>
					)
				},
				{
					Header: 'Zdecyduj',
					Cell: ({row}) => (
						<div>
							<Box sx={{ display: 'flex', gap: '1rem' }}>
								<Tooltip arrow placement="left" title="Edit">
										<Edit color="success"/>
								</Tooltip>
								<Tooltip arrow placement="right" title="Delete">
										<Delete color="error"/>
								</Tooltip>
							</Box>
						</div>
					)
				},
				...columns
			]
		})
		}
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		gotoPage,
		pageCount,
		setPageSize,
		state,
		setGlobalFilter,
		allColumns,
		getToggleHideAllColumnsProps,
		selectedFlatRows
	} =
		tableInstance
	const {globalFilter} = state
	const {pageIndex, pageSize} = state

	return (
		<div className="middleSection">
			<div >
				<div className="header">
					<GlobalFilter className="checkbox" filter={globalFilter} setFilter={setGlobalFilter}/>
					<div className="grid-container">
						<CheckBox className="checkbox" {...getToggleHideAllColumnsProps()}/> Pokaż wszystkie kolumny
					</div>
					{
						allColumns.map(column => (
							<div key={column.id}>
								<lavel>
									<input className="checkbox" type='checkbox' {...column.getToggleHiddenProps()} />
									{column.Header}
								</lavel>
							</div>
						))
					}
					<Button onClick={onDownload} title="Excel">
						<Send/>
						</Button>
					<Button onClick={onDownload} title="AddNewRecord">
						<AddCard/>
					</Button>
					<table ref={tableRef} className="blueTable" {...getTableProps()}>
						<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{
									headerGroup.headers.map((columns) => (
										<th {...columns.getHeaderProps(columns.getSortByToggleProps)}>
											{columns.render('Header')}
											<div>
												{columns.canFilter ? columns.render('Filter') : null}
											</div>
											<span>
											{columns.isSorted ? (columns.isSortedDesc ? '🠛' : '🠙') :''}
										</span>
										</th>
									))
								}
							</tr>
						))}
						</thead>
						<tbody {...getTableBodyProps()}>
						{page.map((row) => {
							prepareRow(row)
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return <td {...cell.getCellProps()}>
											{cell.render('Cell')}
										</td>
									})}
								</tr>
							)
						})}
						</tbody>
						<tfoot>
						<div>
						<span>
							Strona{' '}
							<strong> {pageIndex +1} z {pageOptions.length}
							</strong>{' '}
						</span>
							<span>
							| Idż do strony {' '}
								<input
									type='number'
									defaultValue={pageIndex+1}
									onChange={e => {
										const pageNumber = e.target.value ? Number(e.target.value) -1 : 0
										gotoPage(pageNumber)
									}}
									style ={{width: '50px'}}
								/>
						</span>
							<select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
								{
									[5,10,25,50,100].map(pageSize => (
										<option key={pageSize} value={pageSize}>
											Pokaż {pageSize}
										</option>
									))
								}
							</select>
							<button onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
							<button onClick={()=> previousPage()} disabled={!canPreviousPage}>Poprzednia Strona</button>
							<button onClick={()=> nextPage()} disabled={!canNextPage}>Następna Strona</button>
							<button onClick={()=> gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
						</div>
						</tfoot>
						<pre>
								<code>
									{JSON.stringify(
										{
											selectedFlatRows: selectedFlatRows.map((row) => row.original),
										},
										null,
										2
									)}
								</code>
							</pre>
					</table>
				</div>
			</div>
		</div>

	)
}
export default Table
