import React, {useEffect, useMemo, useState} from 'react'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from 'react-table'
import {dataHandler} from "../../../../../Api/dataHandler";

import {COLUMNS} from "./columns";
import Spinner from "../../../../../Utils/Spinners/Spinner";
import {GlobalFilter} from "../../../../../Utils/Filters/GlobalFilter";
import {ColumnFilter} from "../../../../../Utils/Filters/ColumnFilter";
import NavBar from "../../../../../NavBar/Navbar";
import "./Table.css"

export const Table = () => {

	const [isLoading, setIsLoading] = useState(false);
	// pobranie danych z bazy
	const [data, setData] = useState([])

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const databaseData = await dataHandler.getVoivodeships();
			setData(databaseData);
			console.log(databaseData)
			setIsLoading(false);

		}
		fetchData();
	}, [])

	const columns = useMemo(() => COLUMNS, [])

	const defaultColumn = useMemo(() => {
		return{
			Filter:ColumnFilter
		}
	},[])

	const tableInstance = useTable({
		columns,
		data,
		defaultColumn
		},
		useFilters,
		useGlobalFilter,
		useSortBy,
		usePagination
	)

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		gotoPage,
		pageCount,
		setPageSize,
		prepareRow,
		state,
		setGlobalFilter,
	} =
	tableInstance
	const {globalFilter} = state
	const {pageIndex, pageSize} = state

	//Uruchomienie spinera, ukrycie tabeli do czasu załadowania danych
	const contentClasses = `dataContent ${isLoading ? "hidden" : ""}`;

	return (
		<div>
			<NavBar/>
			{isLoading ? <Spinner/> : null}
			<div className={contentClasses}>
				<div className="middleSection">
				<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
				<table className="blueTable" {...getTableProps()}>
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
						<button onClick={()=> previousPage()} disabled={!canPreviousPage}>Poprzednia</button>
						<button onClick={()=> nextPage()} disabled={!canNextPage}>Następna</button>
						<button onClick={()=> gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>

					</div>
					</tfoot>
				</table>
			</div>
		</div>
		</div>

	)
}
export default Table
