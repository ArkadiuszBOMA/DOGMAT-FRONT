import React, {useEffect, useState, useMemo} from 'react'
import videoMain from "../../../../../assets/video/bac1.mp4";
import {COLUMNS} from "./columns";
import {dataHandler} from "../../../../Api/dataHandler";
import NavBar from "../../../../NavBar/Navbar";
import Spinner from "../../../../Utils/Spinners/Spinner";
import TableTypeAdmin from "../../../../Utils/Table/TableTypeAdmin/TableTypeAdmin";
import TrainingTypeAdd from "./TrainingTypeModal/TrainingTypeAdd/TrainingTypeAdd";
import TrainingTypeArchive from "./TrainingTypeModal/TrainingTypeArchive/TrainingTypeArchive";
import TrainingTypeUpdate from "./TrainingTypeModal/TrainingTypeUpdate/TrainingTypeUpdate";

export const TrainingType = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const addNewRecord = useState(<TrainingTypeAdd/>);
	const addArchive = useState(<TrainingTypeArchive/>);
	const addUpdate = useState(<TrainingTypeUpdate/>);

	const columns = useMemo(() => COLUMNS, []);
	const file = "Dogmate";
	const sheet = "Lekcje";

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const databaseData = await dataHandler.getTrainingType();
			console.log(databaseData)
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
export default TrainingType
