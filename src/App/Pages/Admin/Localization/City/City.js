import React, {useEffect, useState, useMemo} from 'react'
import videoMain from "../../../../../assets/video/bac1.mp4";
import {COLUMNS} from "./columns";
import {dataHandler} from "../../../../Api/dataHandler";
import NavBar from "../../../../NavBar/Navbar";
import Spinner from "../../../../Utils/Spinners/Spinner";
import Table from "../../../../Utils/Table/TableTypeAdmin/Table";
import CityAdd from "./CityModal/CityAdd/CityAdd";
import CityArchive from "./CityModal/CityArchive/CityArchive";
import CityUpdate from "./CityModal/CityUpdate/CityUpdate";

export const City = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const addNewRecord = useState(<CityAdd/>);
	const addArchive = useState(<CityArchive/>);
	const addUpdate = useState(<CityUpdate/>);

	const columns = useMemo(() => COLUMNS, []);
	const file = "Dogmate";
	const sheet = "Miasta";

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const databaseData = await dataHandler.getCities();
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
export default City
