import React, {useEffect, useState, useMemo} from 'react'
import videoMain from "../../../../../assets/video/bac1.mp4";
import {COLUMNS} from "./columns";
import {dataHandler} from "../../../../Api/dataHandler";
import NavBar from "../../../../NavBar/Navbar";
import Spinner from "../../../../Utils/Spinners/Spinner";
import TableTypeAdmin from "../../../../Utils/Table/TableTypeAdmin/TableTypeAdmin";
import TrainingStepAdd from "./TrainingStepModal/TrainingStepAdd/TrainingStepAdd";
import TrainingStepArchive from "./TrainingStepModal/TrainingStepArchive/TrainingStepArchive";
import TrainingStepUpdate from "./TrainingStepModal/TrainingStepUpdate/TrainingStepUpdate";

export const TrainingStep = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const addNewRecord = useState(<TrainingStepAdd/>);
	const addArchive = useState(<TrainingStepArchive/>);
	const addUpdate = useState(<TrainingStepUpdate/>);

	const columns = useMemo(() => COLUMNS, []);
	const file = "Dogmate";
	const sheet = "Time Unit";

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const databaseData = await dataHandler.getTrainingSteps();
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
export default TrainingStep
