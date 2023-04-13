import React, {useEffect, useState, useMemo} from 'react'
import videoMain from "../../../../../assets/video/bac1.mp4";
import {COLUMNS} from "./columns";
import {dataHandler} from "../../../../Api/dataHandler";
import NavBar from "../../../../NavBar/Navbar";
import Spinner from "../../../../Utils/Spinners/Spinner";
import TableTypeAdmin from "../../../../Utils/Table/TableTypeAdmin/TableTypeAdmin";
import TimeUnitAdd from "./TimeUnitModal/TimeUnitAdd/TimeUnitAdd";
import TimeUnitArchive from "./TimeUnitModal/TimeUnitArchive/TimeUnitArchive";
import TimeUnitUpdate from "./TimeUnitModal/TimeUnitUpdate/TimeUnitUpdate";

export const TimeUnits = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const addNewRecord = useState(<TimeUnitAdd/>);
	const addArchive = useState(<TimeUnitArchive/>);
	const addUpdate = useState(<TimeUnitUpdate/>);

	const columns = useMemo(() => COLUMNS, []);
	const file = "Dogmate";
	const sheet = "Time Unit";

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const databaseData = await dataHandler.getTimeUnits();
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
export default TimeUnits
