import React, {useEffect, useState, useMemo} from 'react'
import videoMain from "../../../../../assets/video/login.mp4";
import {COLUMNS} from "./columns";
import {dataHandler} from "../../../../Api/dataHandler";
import Spinner from "../../../../Utils/Spinners/Spinner";
import TableTypeAdmin from "../../../../Utils/Table/TableTypeAdmin/TableTypeAdmin";
import TableTitleDisplay from "../../../../Utils/Table/TableTitleDisplay/TableTitleDisplay";
import CheckedVideo from "../../../../Utils/CheckedVideo/CheckedVideo";
import HomePageHeader from "../../../HomePage/HomePageHeader/HomePageHeader";
import LeftSection from "../../../HomePage/LeftSection/LeftSection";

export const TrainingType = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);

	const columns = useMemo(() => COLUMNS, []);
	const file = "Dogmate";
	const sheet = "Lekcje";
	const textName = "Jesteś w tabeli administracyjnej Typów treningów";

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const databaseData = await dataHandler.getTrainingType();
			setData(databaseData);
			setIsLoading(false);
		}
		fetchData();
	}, [])

	return (
		<div>
			<CheckedVideo src={videoMain}/>
			<HomePageHeader/>
			<LeftSection/>
			{isLoading ? <Spinner/> : null}
			<TableTitleDisplay textName={textName}></TableTitleDisplay>
			<TableTypeAdmin data={data} columns={columns} file={file} sheet={sheet}/>
		</div>
	)
}
export default TrainingType
