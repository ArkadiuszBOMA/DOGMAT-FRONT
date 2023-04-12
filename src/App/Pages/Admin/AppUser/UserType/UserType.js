import React, {useEffect, useState, useMemo} from 'react'
import videoMain from "../../../../../assets/video/bac1.mp4";
import {COLUMNS} from "./columns";
import {dataHandler} from "../../../../Api/dataHandler";
import NavBar from "../../../../NavBar/Navbar";
import Spinner from "../../../../Utils/Spinners/Spinner";
import Table from "../../../../Utils/Table/TableTypeAdmin/Table";
import UserTypeAdd from "./UserTypeModal/UserTypeAdd/UserTypeAdd";
import UserTypeArchive from "./UserTypeModal/UserTypeArchive/UserTypeArchive";
import UserTypeUpdate from "./UserTypeModal/UserTypeUpdate/UserTypeUpdate";

export const UserType = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const addNewRecord = useState(<UserTypeAdd/>);
	const addArchive = useState(<UserTypeArchive/>);
	const addUpdate = useState(<UserTypeUpdate/>);

	const columns = useMemo(() => COLUMNS, []);
	const file = "Dogmate";
	const sheet = "Typ Użytkownika";

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const databaseData = await dataHandler.getUserTypes();
			setData(databaseData);
			setIsLoading(false);
		}
		fetchData();
	}, [])

	return (
		<div>
			<video className="video" src={videoMain} autoPlay loop muted />
			<NavBar/>
			{isLoading ? <Spinner/> : null}
			<Table data={data} columns={columns} file={file} sheet={sheet} addNewRecord={addNewRecord} addArchive={addArchive} addUpdate={addUpdate}/>
		</div>
	)
}
export default UserType
