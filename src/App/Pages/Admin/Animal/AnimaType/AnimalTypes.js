import React, {useEffect, useState, useMemo, Component} from 'react'
import videoMain from "../../../../../assets/video/bac1.mp4";
import {COLUMNS} from "./columns";
import {dataHandler} from "../../../../Api/dataHandler";
import NavBar from "../../../../NavBar/Navbar";
import Spinner from "../../../../Utils/Spinners/Spinner";
import TableTypeAdmin from "../../../../Utils/Table/TableTypeAdmin/TableTypeAdmin";
import "./AnimalTypes.css"


export const AnimalType = (props) => {

	const [isLoading, setIsLoading] = useState(false);;
	const [data, setData] = useState([]);

	const columns = useMemo(() => COLUMNS, []);
	const file = "Dogmate";
	const sheet = "AnimalType";

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const databaseData = await dataHandler.getAnimalTypes();
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
			<TableTypeAdmin data={data} columns={columns} file={file} sheet={sheet}/>
		</div>
	)
}
export default AnimalType
