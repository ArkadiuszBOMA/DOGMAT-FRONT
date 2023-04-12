import React, {useEffect, useState, useMemo} from 'react'
import videoMain from "../../../../../assets/video/bac1.mp4";
import {COLUMNS} from "./columns";
import {dataHandler} from "../../../../Api/dataHandler";
import NavBar from "../../../../NavBar/Navbar";
import Spinner from "../../../../Utils/Spinners/Spinner";
import Table from "../../../../Utils/Table/TableTypeAdmin/Table";
import TrainingLevelAdd from "./TrainingLevelModal/TrainingLevelAdd/TrainingLevelAdd";
import TrainingLevelArchive from "./TrainingLevelModal/TrainingLevelArchive/TrainingLevelArchive";
import TrainingLevelUpdate from "./TrainingLevelModal/TrainingLevelUpdate/TrainingLevelUpdate";

export const TrainingLevel = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const addNewRecord = useState(<TrainingLevelAdd/>);
	const addArchive = useState(<TrainingLevelArchive/>);
	const addUpdate = useState(<TrainingLevelUpdate/>);

	const columns = useMemo(() => COLUMNS, []);
	const file = "Dogmate";
	const sheet = "Time Unit";

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const databaseData = await dataHandler.getTrainingLevels();
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
export default TrainingLevel
