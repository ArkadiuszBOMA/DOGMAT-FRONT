import React, {useCallback, useEffect, useId, useMemo, useRef, useState} from 'react'
import {useDownloadExcel} from 'react-export-table-to-excel'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect } from 'react-table'
import {GlobalFilter} from "../Filters/GlobalFilter";
import {ColumnFilter} from "../Filters/ColumnFilter";
import "./Table.css"
import {CheckBox} from "../CheckBox/CheckBox";
import {Box, Button, IconButton, Tooltip} from "@mui/material";
import {AddCard, Delete, Edit, Send, Input} from "@mui/icons-material";

export const Table = (props) => {

	const data = props.data
	const tableRef = useRef(null);
	const {onDownload} = useDownloadExcel({
		currentTableRef: tableRef.current,
		filename:props.file,
		sheet:props.sheet
	});
	const columns = useMemo(() => props.columns, [props.columns])
	const defaultColumn = useMemo(() => {return{Filter:ColumnFilter,}},[]);

	const tableInstance = useTable({
			columns,
			data,
			defaultColumn,
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
						<CheckBox {...getToggleAllRowsSelectedProps()} />
					),
					Cell: ({row}) => (
						<CheckBox {...row.getToggleRowSelectedProps}/>
					)
				},
				{
					Header: 'Zdecyduj',
					Cell: ({ row }) => (
						<div>
							<Button>Archiwizuj</Button>
						</div>
					),
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
		getToggleHideAllColumnsProps
	} =  tableInstance

	const {globalFilter} = state
	const {pageIndex, pageSize} = state


	return (
		<div className="abc">
			<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
			<Box {...getToggleHideAllColumnsProps()}/> Pokaż wszystkie kolumny
			{
				allColumns.map(column => (
					<span key={column.id}>
						<input type='checkbox' {...column.getToggleHiddenProps()} />
						{column.Header}
					</span>
				))
			}
			<Button onClick={onDownload} title="Excel"><Send/></Button>
			<Button onClick={onDownload} title="AddNewRecord"><AddCard/></Button>

			<table ref={tableRef} {...getTableProps()}>
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
									<div>
									{columns.isSorted ? (columns.isSortedDesc ? '🠛' : '🠙') :''}
									</div>
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
				</tfoot>
			</table>
				<span>
						Strona{' '}
					<strong> {pageIndex +1} z {pageOptions.length}
						</strong>{' '}
					</span>
				<span>
						| Idż do strony {' '}
					<Input
						type='number'
						defaultValue={pageIndex+1}
						onChange={e => {
							const pageNumber = e.target.value ? Number(e.target.value) -1 : 0
							gotoPage(pageNumber)
						}}
						style ={{width: '50px'}}
					/>
					</span>
				<select id="RowByPage" title={"Page"} value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
					{
						[5,10,25,50,100,200].map(pageSize => (
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

	)
}
export default Table
