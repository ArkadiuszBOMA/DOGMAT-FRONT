import React, {useMemo, useRef, useState, lazy, Suspense} from "react";
import {useDownloadExcel} from 'react-export-table-to-excel'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect } from 'react-table'
import {GlobalFilter} from "../Filters/GlobalFilter/GlobalFilter";
import {ColumnFilter} from "../Filters/ColumnFilter/ColumnFilter";
import "./TableTypeAdmin.css"
import {CheckBox} from "../CheckBox/CheckBox";

// poniższe dane  chce przekazać w formie jakiegoś nie wiem jak to zrobić by dynamicznie przekazać importy
// const AddNewRecord =  lazy(import(props.addNewRecord));

// const AddArchive = lazy(import(props.addArchive));
import {dataHandler} from "../../../Api/dataHandler";
// const AddUpdate = lazy(import(props.addUpdate));
import AnimalTypeUpdate from "../../../Pages/Admin/Animal/AnimaType/AnimalTypeModal/AnimalTypeUpdate/AnimalTypeUpdate";


import {faArchive, faEdit, faTableCells} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useLocation} from "react-router-dom";
import AnimalTypeAdd from "../../../Pages/Admin/Animal/AnimaType/AnimalTypeModal/AnimalTypeAdd/AnimalTypeAdd";
import BreedAdd from "../../../Pages/Admin/Animal/Breed/BreedModal/BreedAdd/BreedAdd";
import VoivodeshipAdd from "../../../Pages/Admin/Localization/Voivodeship/VoivodeshipModal/VoivodeshipAdd/VoivodeshipAdd";
import ProvinceAdd from "../../../Pages/Admin/Localization/Province/ProvinceModal/ProvinceAdd/ProvinceAdd";
import CityAdd from "../../../Pages/Admin/Localization/City/CityModal/CityAdd/CityAdd";
import TrainingTypeAdd from "../../../Pages/Admin/Training/TrainingType/TrainingTypeModal/TrainingTypeAdd/TrainingTypeAdd";
import TrainingLevelAdd from "../../../Pages/Admin/Training/TrainingLevel/TrainingLevelModal/TrainingLevelAdd/TrainingLevelAdd";
import TrainingStepAdd from "../../../Pages/Admin/Training/TrainingStep/TrainingStepModal/TrainingStepAdd/TrainingStepAdd";
import TimeUnitAdd from "../../../Pages/Admin/Training/TimeUnit/TimeUnitModal/TimeUnitAdd/TimeUnitAdd";
import UserTypeAdd from "../../../Pages/Admin/AppUser/UserType/UserTypeModal/UserTypeAdd/UserTypeAdd";

export const TableTypeAdmin = (props) => {

	const location = useLocation();
	const getCurrentFormAdd = () => {
		switch (location.pathname) {
			case "/animal-types":
				return <AnimalTypeAdd/>
			case "/breeds":
				return <BreedAdd/>
			case "/voivodeships":
				return <VoivodeshipAdd/>
			case "/provinces":
				return <ProvinceAdd/>
			case "/cities":
				return <CityAdd/>
			case "/training-types":
				return <TrainingTypeAdd/>
			case "/training-levels":
				return <TrainingLevelAdd/>
			case "/training-steps":
				return <TrainingStepAdd/>
			case "/time-units":
				return <TimeUnitAdd/>
			case "/user-types":
				return <UserTypeAdd/>
			default:
				return null;
		}
	}
	const recordID = useState(null)
	const getCurrentFormUpdate = () => {
		console.log(location.pathname)
		switch (location.pathname) {
			case "/animal-types":
				return <AnimalTypeAdd/>
			case "/breeds":
				return <BreedAdd/>
			case "/voivodeships":
				return <VoivodeshipAdd/>
			case "/provinces":
				return <ProvinceAdd/>
			case "/cities":
				return <CityAdd/>
			case "/training-types":
				return <TrainingTypeAdd/>
			case "/training-levels":
				return <TrainingLevelAdd/>
			case "/training-steps":
				return <TrainingStepAdd/>
			case "/time-units":
				return <TimeUnitAdd/>
			case "/user-types":
				return <UserTypeAdd/>
			default:
				return null;
		}
	}
	let getCurrentFormArchive = (id) => {
		switch (location.pathname) {
			case "/animal-types":
				return async () => await dataHandler.archiveAnimalType(id)
			case "/breeds":
				return async () => await dataHandler.archiveBreed(id)
			case "/voivodeships":
				return async () => await dataHandler.archiveVoivodeship(id)
			case "/provinces":
				return async () => await dataHandler.archiveProvince(id)
			case "/cities":
				return async () => await dataHandler.archiveCity(id)
			case "/training-types":
				return async () => await dataHandler.archiveTrainingType(id)
			case "/training-levels":
				return async () => await dataHandler.archiveTrainingLevel(id)
			case "/training-steps":
				return async () => await dataHandler.archiveTrainingStep(id)
			case "/time-units":
				return async () => await dataHandler.archiveTimeUnit(id)
			case "/user-types":
				return async () => await dataHandler.archiveUserType(id)
			default:
				return null
		}
	}


	const [isModalAddNew, setIsModalAddNew] = useState(false);
	const [isModalArchive, setIsModalArchive] = useState(false);
	const [isModalUpdate, setIsModalUpdate] = useState(false);

	const handleClickOn = () => {
		console.log(isModalUpdate);
		setIsModalUpdate(true);
		console.log(isModalUpdate);
	}
	const handleClickOff = () => {
		console.log(isModalUpdate);
		setIsModalUpdate(false);
		console.log(isModalUpdate);
	}

	const data = props.data;
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
							<FontAwesomeIcon onClick={handleClickOn} icon={faEdit} key = {"U" + row.original.id.valueOf()}></FontAwesomeIcon>
							{isModalUpdate ? <AnimalTypeUpdate dataRow={row.original}
															   onClose={handleClickOff}/> : null}
							<br/>
							<FontAwesomeIcon key = {"A" + row.original.id.valueOf()} onClick={getCurrentFormArchive(row.original.id.valueOf())} icon={faArchive}></FontAwesomeIcon>
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
				allColumns.map((column, index) =>
					{
						return (
							<span className="fl-table td" key={index}>
								<input className="inputCheckBox" type='checkbox' {...column.getToggleHiddenProps()}/>
								{column.Header}
							</span>
						)
					}
				)
			}
			<div>
				<div>
					<FontAwesomeIcon onClick={onDownload} title="Excel" icon={faTableCells}></FontAwesomeIcon>
				</div>
				<div>
					<FontAwesomeIcon onClick={() => setIsModalAddNew(true) } title="Dodaj" icon={faEdit}></FontAwesomeIcon>
					{getCurrentFormAdd()}

				</div>
			</div>
			<table className="fl-table" ref={tableRef} {...getTableProps()}>
				<thead>
				{headerGroups.map((headerGroup) => (
					<tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
						{
							headerGroup.headers.map((columns) => (
								<th key = {columns.id} {...columns.getHeaderProps(columns.getSortByToggleProps)}>
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
						<tr key={row.id} {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return <td key={cell.id} {...cell.getCellProps()}>
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
export default TableTypeAdmin
