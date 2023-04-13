import React, {useEffect, useState, useMemo} from 'react'
import videoMain from "../../../../../assets/video/bac1.mp4";
import {COLUMNS} from "./columns";
import {dataHandler} from "../../../../Api/dataHandler";
import NavBar from "../../../../NavBar/Navbar";
import Spinner from "../../../../Utils/Spinners/Spinner";
import TableTypeAdmin from "../../../../Utils/Table/TableTypeAdmin/TableTypeAdmin";
import VoivodeshipAdd from "./VoivodeshipModal/VoivodeshipAdd/VoivodeshipAdd";
import VoivodeshipArchive from "./VoivodeshipModal/VoivodeshipArchive/VoivodeshipArchive";
import VoivodeshipUpdate from "./VoivodeshipModal/VoivodeshipUpdate/VoivodeshipUpdate";

export const VoivodeShip = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const addNewRecord = useState(<VoivodeshipAdd/>);
	const addArchive = useState(<VoivodeshipArchive/>);
	const addUpdate = useState(<VoivodeshipUpdate/>);

	const columns = useMemo(() => COLUMNS, []);
	const file = "Dogmate";
	const sheet = "AnimalType";

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const databaseData = await dataHandler.getVoivodeships();
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
			<TableTypeAdmin data={data} columns={columns} file={file} sheet={sheet} addNewRecord={addNewRecord} addArchive={addArchive} addUpdate={addUpdate}/>
		</div>
	)
}
export default VoivodeShip
