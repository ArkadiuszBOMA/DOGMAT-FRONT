import React, {Component, useCallback, useEffect, useId, useMemo, useRef, useState} from 'react'
import {useDownloadExcel} from 'react-export-table-to-excel'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect } from 'react-table'
import {GlobalFilter} from "../Filters/GlobalFilter/GlobalFilter";
import {ColumnFilter} from "../Filters/ColumnFilter/ColumnFilter";
import "./Table.css"
import {CheckBox} from "../CheckBox/CheckBox";
import MainColorButton from "../../Buttons/MainColorButton/MainColorButton";
import ButtonWithoutIcon from "../../Buttons/ButtonWithIcon/ButtonWithIconAddress";
import AnimalTypeAdd from "../../../Pages/Admin/Animal/AnimaType/AnimalTypeModal/AnimalTypeAdd/AnimalTypeAdd";
import AnimalTypeArchive
	from "../../../Pages/Admin/Animal/AnimaType/AnimalTypeModal/AnimalTypeArchive/AnimalTypeArchive";
export const Table = (props) => {

	const [isModalAddNew, setIsModalAddNew] = useState(false);
	const [isModalArchive, setIsModalArchive] = useState(false);
	const [isModalUpdate, setIsModalUpdate] = useState(false);
	const addNewRecord = props.addNewRecord
	const addArchive = props.addArchive
	const addUpdate = props.addUpdate

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
							<MainColorButton text="Uaktualnij"/>
							<MainColorButton onClick={() => setIsModalArchive(true)} text={row.original.id.valueOf()}/>
							{isModalArchive ? <AnimalTypeArchive recordId={row.original.id.valueOf()} setIsModalArchive={setIsModalArchive} onClose={() => setIsModalArchive(false)}/> : null}
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
					<span key="totalCheckbox" className="inputIdzDoStrony">Pokaż wszystkie kolumny</span>
			</div>
			{
				allColumns.map(column => (
					<span className="inputIdzDoStrony" key={column.id}>
						<input key={column.Header} className="inputCheckBox" type='checkbox' {...column.getToggleHiddenProps()} />
						{column.Header}
					</span>
				))
			}
			<div>
				<MainColorButton onClick={onDownload} text={"Excel"}></MainColorButton>
				<ButtonWithoutIcon onClick={() => setIsModalAddNew(true) }></ButtonWithoutIcon>
				{isModalAddNew ? <AnimalTypeAdd setIsModalAddNew={setIsModalAddNew} onClose={() => setIsModalAddNew(false)}/> : null}
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
				<span className="IdzDoStrony">
						Strona{' '}
					<strong> {pageIndex +1} z {pageOptions.length}
						</strong>{' '}
					</span>
				<span className="IdzDoStrony">
						Idż do strony {' '}
					<input className="inputIdzDoStrony"
						type='number'
						defaultValue={pageIndex+1}
						onChange={e => {
							const pageNumber = e.target.value ? Number(e.target.value) -1 : 0
							gotoPage(pageNumber)
						}}
					/>
					</span>
				<select className="selectPage" id="RowByPage" title={"Page"} value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
					{
						[5,10,25,50,100,200].map(pageSize => (
							<option key={pageSize} value={pageSize}>
								Pokaż {pageSize}
							</option>
						))
					}
				</select>
			<MainColorButton onClick={()=> gotoPage(0)} disabled={!canPreviousPage} text={'<<'}/>
			<MainColorButton onClick={()=> previousPage()} disabled={!canPreviousPage} text={"Poprzednia Strona"}/>
			<MainColorButton onClick={()=> nextPage()} disabled={!canNextPage} text={"Następna Strona"}/>
			<MainColorButton onClick={()=> gotoPage(pageCount - 1)} disabled={!canNextPage} text={'>>'}/>
		</div>

	)
}
export default Table
