import React, {useMemo, useRef, useState, lazy, Suspense} from "react";
import {useDownloadExcel} from 'react-export-table-to-excel'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect } from 'react-table'
import {GlobalFilter} from "../Filters/GlobalFilter/GlobalFilter";
import {ColumnFilter} from "../Filters/ColumnFilter/ColumnFilter";
import "./Table.css"
import {CheckBox} from "../CheckBox/CheckBox";
// poniższe dane  chce przekazać w formie jakiegoś nie wiem jak to zrobić by dynamicznie przekazać importy
// const AddNewRecord =  lazy(import(props.addNewRecord));
// const AddArchive = lazy(import(props.addArchive));
// const AddUpdate = lazy(import(props.addUpdate));
import {dataHandler} from "../../../Api/dataHandler";
import AnimalTypeAdd from "../../../Pages/Admin/Animal/AnimaType/AnimalTypeModal/AnimalTypeAdd/AnimalTypeAdd";
import AnimalTypeUpdate from "../../../Pages/Admin/Animal/AnimaType/AnimalTypeModal/AnimalTypeUpdate/AnimalTypeUpdate";
import {colors} from "@mui/material";
export const Table = (props) => {


	const [isModalAddNew, setIsModalAddNew] = useState(false);
	const [isModalArchive, setIsModalArchive] = useState(false);
	const [isModalUpdate, setIsModalUpdate] = useState(false);

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
						<CheckBox
							{...row.getToggleRowSelectedProps()}/>
					)
				},
				{
					Header: 'Zdecyduj',
					Cell: ({ row }) => (
						<div>
							<button key = {"U" + row.original.id.valueOf()} onClick={() => setIsModalUpdate(false) }>Uaktualnij</button>
							{isModalUpdate ? <AnimalTypeUpdate dataRow={row.original} key = {"DANE" + row.original.id.valueOf()} setIsModalUpdate={setIsModalUpdate} onClose={() => setIsModalUpdate(false)}/> : null}
							<button key = {"A" + row.original.id.valueOf()} onClick={async () => await dataHandler.archiveAnimalType(row.original.id.valueOf())}>Archiwizuj</button>
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
			<div className="table-wrapper">
			<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
			<div>
				<CheckBox {...getToggleHideAllColumnsProps()}></CheckBox>
					<span key="totalCheckbox" className="text">Pokaż wszystkie kolumny</span>
			</div>
			{
				allColumns.map(column => (
					<span className="fl-table td" key={column.id}>
						<input key={column.Header} className="inputCheckBox" type='checkbox' {...column.getToggleHiddenProps()} />
						{column.Header}
					</span>
				))
			}
			<div>
				<div>
					<button onClick={onDownload} title="Excel">{"Excel"}</button>
				</div>
				<div>
					<button onClick={() => setIsModalAddNew(true) } title="Dodaj">{"Dodaj"}</button>
					{isModalAddNew ? <AnimalTypeAdd setIsModalAddNew={setIsModalAddNew} onClose={() => setIsModalAddNew(false)}/> : null}
				</div>
			</div>
			<table className="fl-table" ref={tableRef} {...getTableProps()}>
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
									<h2>
									{columns.isSorted ? (columns.isSortedDesc ? '🠛' : '🠙') :'-'}
									</h2>
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
				<span className="text">
						Strona{' '}
					<strong> {pageIndex +1} z {pageOptions.length}
						</strong>{' '}
					</span>
				<label className="text">
						Idż do strony {' '}
					<input className="text"
						type='number'
						defaultValue={pageIndex+1}
						onChange={e => {
							const pageNumber = e.target.value ? Number(e.target.value) -1 : 0
							gotoPage(pageNumber)
						}}
					/>
					</label>
				<select className="text" id="RowByPage" title={"Page"} value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
					{
						[5,10,25,50,100,200].map(pageSize => (
							<option key={pageSize} value={pageSize}>
								Pokaż {pageSize}
							</option>
						))
					}
				</select>
			<button title="firstPage" onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
			<button title="previousPage" onClick={()=> previousPage()} disabled={!canPreviousPage}>{'<'}</button>
			<button title="nestPage" onClick={()=> nextPage()} disabled={!canNextPage}>{'>'}</button>
			<button title="lastPage" onClick={()=> gotoPage(pageCount - 1)} disabled={!canNextPage}> {'>>'}</button>
		</div>

	)
}
export default Table
