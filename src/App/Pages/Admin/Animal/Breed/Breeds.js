import React, {useEffect, useState, useMemo} from 'react'

import videoMain from "../../../../../assets/video/bac1.mp4";
import {COLUMNS} from "./columns";
import {dataHandler} from "../../../../Api/dataHandler";
import NavBar from "../../../../NavBar/Navbar";
import Spinner from "../../../../Utils/Spinners/Spinner";
import Table from "../../../../Utils/Table/TableTypeAdmin/Table";
import BreedAdd from "./BreedModal/BreedAdd/BreedAdd";
import BreedArchive from "./BreedModal/BreedArchive/BreedArchive";
import BreedUpdate from "./BreedModal/BreedUpdate/BreedUpdate";

export const Breed = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const addNewRecord = useState("BreedAdd");
	const addArchive = useState("BreedArchive");
	const addUpdate = useState("BreedUpdate");

	const columns = useMemo(() => COLUMNS, []);
	const file = "Dogmate";
	const sheet = "AnimalType";

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const databaseData = await dataHandler.getBreeds();
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
export default Breed
