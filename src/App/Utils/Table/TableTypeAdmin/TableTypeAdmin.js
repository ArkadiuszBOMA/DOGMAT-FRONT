// SYSTEMOWE
import React, {useMemo, useRef, useState} from "react";
import {useDownloadExcel} from 'react-export-table-to-excel'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect } from 'react-table'
import {GlobalFilter} from "../Filters/GlobalFilter/GlobalFilter";
import {ColumnFilter} from "../Filters/ColumnFilter/ColumnFilter";
import {CheckBox} from "../CheckBox/CheckBox";
import {useLocation} from "react-router-dom";
import './TableTypeAdmin.css'
import '../../../Pages/HomePage/HomePage.css'
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
import AnyContentModal from "../../Modals/AnyContentModal";


export const TableTypeAdmin = (props) => {

	//HOOKI
	const [isTable, setIsTable] = useState(true);
	const [isModalAddNew, setIsModalAddNew] = useState(false);
	const [isModalUpdate, setIsModalUpdate] = useState(false);
	const data = props.data

	// zmienne do komunikowania się ze ścieżką
	const location = useLocation();
	// wybór opcji umożliwiającej zmianę importów w zależności od wywołanej dodawanie
	const getCurrentFormAdd = () => {
		switch (location.pathname) {
			case "/animal-types":
				return <AnimalTypeAdd onClose={() => {setIsModalAddNew(false); setIsTable(true)}}/>
			case "/breeds":
				return <BreedAdd onClose={() => {setIsModalAddNew(false); setIsTable(true)}}/>
			case "/cities":
				return <CityAdd onClose={() => {setIsModalAddNew(false); setIsTable(true)}}/>
			case "/provinces":
				return <ProvinceAdd onClose={() => {setIsModalAddNew(false); setIsTable(true)}}/>
			case "/voivodeships":
				return <VoivodeshipAdd onClose={() => {setIsModalAddNew(false); setIsTable(true)}}/>
			case "/time-units":
				return <TimeUnitAdd onClose={() => {setIsModalAddNew(false); setIsTable(true)}}/>
			case "/training-types":
				return <TrainingTypeAdd onClose={() => {setIsModalAddNew(false); setIsTable(true)}}/>
			case "/training-levels":
				return <TrainingLevelAdd onClose={() => {setIsModalAddNew(false); setIsTable(true)}}/>
			case "/training-steps":
				return <TrainingStepAdd onClose={() => {setIsModalAddNew(false); setIsTable(true)}}/>
			case "/user-roles":
				return <UserRoleAdd onClose={() => {setIsModalAddNew(false); setIsTable(true)}}/>
			case "/user-privileges":
				return <UserPrivilegeAdd onClose={() => {setIsModalAddNew(false); setIsTable(true)}}/>
			case "/users":
				return <AppUserAdd onClose={() => {setIsModalAddNew(false); setIsTable(true)}}/>
			case "/care-announcement":
				return <CareTypeAdd onClose={() => {setIsModalAddNew(false); setIsTable(true)}}/>

			default:
				return null;
		}
	}
	// wybór opcji umożliwiającej zmianę importów w zależności od wywołanej dla updatów
	const getCurrentFormUpdate = (dataToModal) => {
		console.log(location.pathname)
		console.log(dataToModal)
		switch (location.pathname) {
			case "/animal-types":
				return <AnimalTypeUpdate dataRow={dataToModal} onClose={() => {setIsModalUpdate(false)}}/>
			case "/breeds":
				return <BreedUpdate dataRow={dataToModal}  onClose={() => {setIsModalUpdate(false)}}/>
			case "/cities":
				return <CityUpdate dataRow={dataToModal} onClose={() => {setIsModalUpdate(false)}}/>
			case "/provinces":
				return <ProvinceUpdate dataRow={dataToModal} onClose={() => {setIsModalUpdate(false)}}/>
			case "/voivodeships":
				return <VoivodeshipUpdate dataRow={dataToModal} onClose={() => {setIsModalUpdate(false)}}/>
			case "/training-types":
				return <TrainingTypeUpdate dataRow={dataToModal} onClose={() => {setIsModalUpdate(false)}}/>
			case "/training-levels":
				return <TrainingLevelUpdate dataRow={dataToModal} onClose={() => {setIsModalUpdate(false)}}/>
			case "/training-steps":
				return <TrainingStepUpdate dataRow={dataToModal} onClose={() => {setIsModalUpdate(false)}}/>
			case "/time-units":
				return <TimeUnitUpdate dataRow={dataToModal} onClose={() => {setIsModalUpdate(false)}}/>
			case "/user-roles":
				return <UserRoleUpdate dataRow={dataToModal} onClose={() => {setIsModalUpdate(false)}}/>
			case "/user-privileges":
				return <UserPrivilegeUpdate dataRow={dataToModal} onClose={() => {setIsModalUpdate(false)}}/>
			case "/users":
				return <AppUserUpdate dataRow={dataToModal} onClose={() => {setIsModalUpdate(false)}}/>
			case "/care-announcement":
				return <CareTypeUpdate dataRow={dataToModal} onClose={() => {setIsModalUpdate(false)}}/>
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
	const getCurrentFormDelete = async (id) => {
		switch (location.pathname) {
			case "/animal-types":
				return await dataHandler.deleteAnimalType(id)
			case "/breeds":
				return await dataHandler.deleteBreed(id)
			case "/voivodeships":
				return await dataHandler.deleteVoivodeship(id)
			case "/provinces":
				return await dataHandler.deleteProvince(id)
			case "/cities":
				return await dataHandler.deleteCity(id)
			case "/training-types":
				return await dataHandler.deleteTrainingType(id)
			case "/training-levels":
				return await dataHandler.deleteTrainingLevel(id)
			case "/training-steps":
				return await dataHandler.deleteTrainingStep(id)
			case "/time-units":
				return await dataHandler.deleteTimeUnit(id)
			case "/user-roles":
				return await dataHandler.deleteUserRole(id)
			case "/user-privilege":
				return await dataHandler.deleteUserPrivilege(id)
			case "/care-announcement":
				return await dataHandler.deleteCareAnnouncement(id)
			default:
				return null
		}
	}



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
					id:'Selector',
					Header:({getToggleAllRowsSelectedProps}) => (
						<CheckBox {...getToggleAllRowsSelectedProps()}/>
					),
					Cell: ({row}) => (
						<CheckBox
							{...row.getToggleRowSelectedProps()}/>
					)
				},
				{
					id: 'Actions',
					Header: 'Zdecyduj',
					Cell: ({row}) => (
						<div >
							<button className="filterGlobalBox" id= {"UPD" + row.original.id.valueOf()}
									onClick={()=> {
										console.log("Mój Status Modala" + " " + isModalUpdate);
										console.log(row.original);
										setIsModalUpdate(true);
										console.log("ALE JESTEM LENIWY I NIC NIE ROBIĘ BO DALEJ MAM "+ isModalUpdate)
									}}>Uaktualnij</button>
							{isModalUpdate ? <AnyContentModal content={getCurrentFormUpdate(row.original.valueOf())}
															  onClose={() => {setIsModalUpdate(false)}}/> : null}
							<br/>
							<button className="filterGlobalBox" id= {"ARC" + row.original.id.valueOf()}
									onClick={() => {getCurrentFormArchive(row.original.id.valueOf()); window.location.reload()}}>Archiwizuj</button>
						<br/>
							<button className="filterGlobalBox" id= {"DEL" + row.original.id.valueOf()} onClick={() => {getCurrentFormDelete(row.original.id.valueOf()); window.location.reload()}}>Usuń</button>
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
		<article>
				<div className="table-wrapper">
					<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
				<div>
					<CheckBox {...getToggleHideAllColumnsProps()}/>
						<span className="filterGlobalBox" key="input" {...getToggleHideAllColumnsProps()}>
							Pokaż wszystkie kolumny
							</span>
				</div>
				{
					allColumns.map((column, index) => (
						<span key={index} className="filterGlobalBox">
							<input key={column.Header} className="inputCheckBox" type='checkbox' {...column.getToggleHiddenProps()}/>
							{column.Header}
						</span>
					))
				}
				<div>
					<button className="filterGlobalBox" id="Excel" title="Excle" onClick={onDownload}>EXPORT DO EXCEL</button>
					<button className="filterGlobalBox" id="Dodaj" title="Dodaj"
							onClick={()=> {setIsModalAddNew(true); setIsTable(false)}}>DODAJ NOWY REKORD </button>
					{isModalAddNew ? <AnyContentModal content={getCurrentFormAdd()}
													  onClose={() => {setIsModalAddNew(false); setIsTable(true)}
					}/> : null}
				</div>
					{isTable ? displayTable() : null}
			</div>
		</article>

	)
}
export default TableTypeAdmin
