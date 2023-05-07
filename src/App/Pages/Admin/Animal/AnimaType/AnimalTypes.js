import React, {useEffect, useState, useMemo} from 'react'
import videoMain from "../../../../../assets/video/login.mp4";
import {COLUMNS} from "./columns";
import {dataHandler} from "../../../../Api/dataHandler";
import Spinner from "../../../../Utils/Spinners/Spinner";
import TableTypeAdmin from "../../../../Utils/Table/TableTypeAdmin/TableTypeAdmin";
import '../../../HomePage/HomePage.css';
import './AnimalTypes.css';
import TableTitleDisplay from "../../../../Utils/Table/TableTitleDisplay/TableTitleDisplay";
import CheckedVideo from "../../../../Utils/CheckedVideo/CheckedVideo";
import LeftSection from "../../../HomePage/LeftSection/LeftSection";
import HomePageHeader from "../../../HomePage/HomePageHeader/HomePageHeader";


export const AnimalType = (props) => {

	const [isLoading, setIsLoading] = useState(false);;
	const [data, setData] = useState([]);

	const columns = useMemo(() => COLUMNS, []);
	const file = "Dogmate";
	const sheet = "AnimalType";
	const textName = "Jesteś w tabeli administracyjnej Rodzaje Zwierząt";

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
			<CheckedVideo src={videoMain}/>
			<div>
				<HomePageHeader/>
				<TableTitleDisplay textName={textName}></TableTitleDisplay>
			</div>
			<LeftSection/>
			{isLoading ? <Spinner/> : null}
			<TableTypeAdmin data={data} columns={columns} file={file} sheet={sheet}/>
		</div>
	)
}
export default AnimalType
