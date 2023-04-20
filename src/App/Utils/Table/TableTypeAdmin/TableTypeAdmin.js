// SYSTEMOWE
import React, {useMemo, useRef, useState} from "react";
import {useDownloadExcel} from 'react-export-table-to-excel'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect } from 'react-table'
import {GlobalFilter} from "../Filters/GlobalFilter/GlobalFilter";
import {ColumnFilter} from "../Filters/ColumnFilter/ColumnFilter";
import {CheckBox} from "../CheckBox/CheckBox";
import {faEdit, faTableCells} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useLocation} from "react-router-dom";
// DANE
import {dataHandler} from "../../../Api/dataHandler";
import "./TableTypeAdmin.css"
// ADD
import AnimalTypeAdd from "../../../Pages/Admin/Animal/AnimaType/AnimalTypeModal/AnimalTypeAdd/AnimalTypeAdd";
import BreedAdd from "../../../Pages/Admin/Animal/Breed/BreedModal/BreedAdd/BreedAdd";

import AppUserAdd from "../../../Pages/Admin/AppUser/AppUsers/AppUserModal/AppUserAdd/AppUserAdd";
import UserRoleAdd from "../../../Pages/Admin/AppUser/UserRole/UserRoleModal/UserRoleAdd/UserRoleAdd";
import UserPrivilegeAdd from "../../../Pages/Admin/AppUser/UserPrivilege/UserPrivilegeModal/UserPrivilegeAdd/UserPrivilegeAdd";

import CareTypeAdd from "../../../Pages/Admin/Care/CareType/CareTypeModal/CareTypeAdd/CareTypeAdd"

import CityAdd from "../../../Pages/Admin/Localization/City/CityModal/CityAdd/CityAdd";
import ProvinceAdd from "../../../Pages/Admin/Localization/Province/ProvinceModal/ProvinceAdd/ProvinceAdd";
import VoivodeshipAdd from "../../../Pages/Admin/Localization/Voivodeship/VoivodeshipModal/VoivodeshipAdd/VoivodeshipAdd";

import TimeUnitAdd from "../../../Pages/Admin/Training/TimeUnit/TimeUnitModal/TimeUnitAdd/TimeUnitAdd";
import TrainingLevelAdd from "../../../Pages/Admin/Training/TrainingLevel/TrainingLevelModal/TrainingLevelAdd/TrainingLevelAdd";
import TrainingStepAdd from "../../../Pages/Admin/Training/TrainingStep/TrainingStepModal/TrainingStepAdd/TrainingStepAdd";
import TrainingTypeAdd from "../../../Pages/Admin/Training/TrainingType/TrainingTypeModal/TrainingTypeAdd/TrainingTypeAdd";
// UPDATE
import AnimalTypeUpdate from "../../../Pages/Admin/Animal/AnimaType/AnimalTypeModal/AnimalTypeUpdate/AnimalTypeUpdate";
import BreedUpdate from "../../../Pages/Admin/Animal/Breed/BreedModal/BreedUpdate/BreedUpdate";

import AppUserUpdate from "../../../Pages/Admin/AppUser/AppUsers/AppUserModal/AppUserUpdate/AppUserUpdate";
import UserPrivilegeUpdate from "../../../Pages/Admin/AppUser/UserPrivilege/UserPrivilegeModal/UserPrivilegeUpdate/UserPrivilegeUpdate";
import UserRoleUpdate from "../../../Pages/Admin/AppUser/UserRole/UserRoleModal/UserRoleUpdate/UserRoleUpdate";

import CareTypeUpdate from "../../../Pages/Admin/Care/CareType/CareTypeModal/CareTypeUpdate/CareTypeUpdate"

import CityUpdate from "../../../Pages/Admin/Localization/City/CityModal/CityUpdate/CityUpdate";
import ProvinceUpdate from "../../../Pages/Admin/Localization/Province/ProvinceModal/ProvinceUpdate/ProvinceUpdate";
import VoivodeshipUpdate from "../../../Pages/Admin/Localization/Voivodeship/VoivodeshipModal/VoivodeshipUpdate/VoivodeshipUpdate";


import TimeUnitUpdate from "../../../Pages/Admin/Training/TimeUnit/TimeUnitModal/TimeUnitUpdate/TimeUnitUpdate";
import TrainingLevelUpdate from "../../../Pages/Admin/Training/TrainingLevel/TrainingLevelModal/TrainingLevelUpdate/TrainingLevelUpdate";
import TrainingStepUpdate from "../../../Pages/Admin/Training/TrainingStep/TrainingStepModal/TrainingStepUpdate/TrainingStepUpdate";
import TrainingTypeUpdate from "../../../Pages/Admin/Training/TrainingType/TrainingTypeModal/TrainingTypeUpdate/TrainingTypeUpdate";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";


export const TableTypeAdmin = (props) => {

	// zmienne do komunikowania się ze ścieżką
	const location = useLocation();
	// wybór opcji umożliwiającej zmianę importów w zależności od wywołanej dodawanie
	const getCurrentFormAdd = () => {
		console.log(location.pathname)
		switch (location.pathname) {
			case "/animal-types":
				return <AnimalTypeAdd onClose={() => setIsModalAddNew(false)}/>
			case "/breeds":
				return <BreedAdd onClose={() => setIsModalAddNew(false)}/>
			case "/cities":
				return <CityAdd onClose={() => setIsModalAddNew(false)}/>
			case "/provinces":
				return <ProvinceAdd onClose={() => setIsModalAddNew(false)}/>
			case "/voivodeships":
				return <VoivodeshipAdd onClose={() => setIsModalAddNew(false)}/>
			case "/time-units":
				return <TimeUnitAdd onClose={() => setIsModalAddNew(false)}/>
			case "/training-types":
				return <TrainingTypeAdd onClose={() => setIsModalAddNew(false)}/>
			case "/training-levels":
				return <TrainingLevelAdd onClose={() => setIsModalAddNew(false)}/>
			case "/training-steps":
				return <TrainingStepAdd onClose={() => setIsModalAddNew(false)}/>
			case "/user-roles":
				return <UserRoleAdd onClose={() => setIsModalAddNew(false)}/>
			case "/user-privileges":
				return <UserPrivilegeAdd onClose={() => setIsModalAddNew(false)}/>
			case "/users":
				return <AppUserAdd onClose={() => setIsModalAddNew(false)}/>
			case "/care-announcement":
				return <CareTypeAdd onClose={() => setIsModalAddNew(false)}/>

			default:
				return null;
		}
	}
	// wybór opcji umożliwiającej zmianę importów w zależności od wywołanej dla updatów
	const getCurrentFormUpdate = (dataToModal) => {
		console.log(location.pathname)
		switch (location.pathname) {
			case "/animal-types":
				return <AnimalTypeUpdate dataRow={dataToModal} onClose={() => setIsModalUpdate(false)}/>
			case "/breeds":
				return <BreedUpdate dataRow={dataToModal} onClose={() => setIsModalUpdate(false)}/>
			case "/cities":
				return <CityUpdate dataRow={dataToModal} onClose={() => setIsModalUpdate(false)}/>
			case "/provinces":
				return <ProvinceUpdate dataRow={dataToModal} onClose={() => setIsModalUpdate(false)}/>
			case "/voivodeships":
				return <VoivodeshipUpdate dataRow={dataToModal} onClose={() => setIsModalUpdate(false)}/>
			case "/training-types":
				return <TrainingTypeUpdate dataRow={dataToModal} onClose={() => setIsModalUpdate(false)}/>
			case "/training-levels":
				return <TrainingLevelUpdate dataRow={dataToModal} onClose={() => setIsModalUpdate(false)}/>
			case "/training-steps":
				return <TrainingStepUpdate dataRow={dataToModal} onClose={() => setIsModalUpdate(false)}/>
			case "/time-units":
				return <TimeUnitUpdate dataRow={dataToModal} onClose={() => setIsModalUpdate(false)}/>
			case "/user-roles":
				return <UserRoleUpdate dataRow={dataToModal} onClose={() => setIsModalUpdate(false)}/>
			case "/user-privileges":
				return <UserPrivilegeUpdate onClose={() => setIsModalAddNew(false)}/>
			case "/users":
				return <AppUserUpdate onClose={() => setIsModalAddNew(false)}/>
			case "/care-announcement":
				return <CareTypeUpdate onClose={() => setIsModalAddNew(false)}/>
			default:
				return null;
		}
	}
	// wybór opcji umożliwiającej zmianę importów w zależności od wywołanej dla archiwizacji
	const getCurrentFormArchive = (id) => {
		console.log(location.pathname)
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
			case "/user-roles":
				return async () => await dataHandler.archiveUserRole(id)
			case "/user-privileges":
				return async () => await dataHandler.archiveUserPrivilege(id)
			case "/users":
				return async () => await dataHandler.archiveAppUser(id)
			case "/care-announcement":
				return async () => await dataHandler.archiveCareAnnouncement(id)
			default:
				return null
		}
	}
	// wybór opcji umożliwiającej zmianę importów w zależności od wywołanej dla usuwanie
	const getCurrentFormDelete = (id) => {
		console.log(location.pathname)
		switch (location.pathname) {
			case "/animal-types":
				return async () => await dataHandler.deleteAnimalType(id)
			case "/breeds":
				return async () => await dataHandler.deleteBreed(id)
			case "/voivodeships":
				return async () => await dataHandler.deleteVoivodeship(id)
			case "/provinces":
				return async () => await dataHandler.deleteProvince(id)
			case "/cities":
				return async () => await dataHandler.deleteCity(id)
			case "/training-types":
				return async () => await dataHandler.deleteTrainingType(id)
			case "/training-levels":
				return async () => await dataHandler.deleteTrainingLevel(id)
			case "/training-steps":
				return async () => await dataHandler.deleteTrainingStep(id)
			case "/time-units":
				return async () => await dataHandler.deleteTimeUnit(id)
			case "/user-roles":
				return async () => await dataHandler.deleteUserRole(id)
			case "/user-privileges":
				return async () => await dataHandler.deleteUserPrivilege(id)
			case "/care-announcement":
				return async () => await dataHandler.deleteCareAnnouncement(id)
			default:
				return null
		}
	}

	//HOOKI
	const [isModalAddNew, setIsModalAddNew] = useState(false);;
	const [isModalUpdate, setIsModalUpdate] = useState(false);
	const data = props.data

	const tableRef = useRef(null);
	const {onDownload} = useDownloadExcel({
		currentTableRef: tableRef.current,
		filename:props.file,
		sheet:props.sheet
	});

	const columns = props.columns
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
						<CheckBox {...getToggleAllRowsSelectedProps()}/>
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
							<button id= {"UPD" + row.original.id.valueOf()} onClick={() => setIsModalUpdate(true) }>UAKTUALNIJ</button>
							{isModalUpdate ? getCurrentFormUpdate(row.original.id.valueOf()): null}
							<br/>
							<button id= {"ARC" + row.original.id.valueOf()} onClick={() => getCurrentFormArchive(row.original.id.valueOf())}>ARCHIWIZUJ</button>
							<br/>
							<button id= {"DEL" + row.original.id.valueOf()} onClick={() => getCurrentFormDelete(row.original.id.valueOf())} >USUŃ</button>
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
		<>
			<div className="table-wrapper">
				<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
			<div>
				<CheckBox {...getToggleHideAllColumnsProps()}/>
					<span key="totalCheckbox" className="text">Pokaż wszystkie kolumny</span>
			</div>
			{
				allColumns.map((column, index) => (
					<span key={index} className="fl-table td">
						<input key={column.Header} className="inputCheckBox" type='checkbox' {...column.getToggleHiddenProps()}/>
						{column.Header}
					</span>
				))
			}
			<div>
				<FontAwesomeIcon id="Excel" onClick={onDownload} title="Excel" icon={faTableCells}/>
			</div>
			<div>
				<FontAwesomeIcon id="Dodaj" onClick={() => setIsModalAddNew(true) } title="Dodaj" icon={faEdit}/>
				{isModalAddNew ? getCurrentFormAdd(): null}
			</div>
			<table className="fl-table" ref={tableRef} {...getTableProps()}>
				<thead>
				{headerGroups.map((headerGroup) => (
					<tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
						{
							headerGroup.headers.map((columns, index) => (
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
						<tr key={row.id} {...row.getRowProps()} onClick={() => console.log(row.original)}>
							{row.cells.map((cell, j) => {
								return (
									<td
										rowSpan={cell.rowSpan}
										{...cell.getCellProps()}>
									{cell.render('Cell')}
								</td>)
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
		</>

	)
}
export default TableTypeAdmin
