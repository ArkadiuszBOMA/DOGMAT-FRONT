import React, {useEffect, useState, useMemo} from 'react'
import {COLUMNS} from "./columns";
import {dataHandler} from "../../../../Api/dataHandler";
import Spinner from "../../../../Utils/Spinners/Spinner";
import TableTypeAdmin from "../../../../Utils/Table/TableTypeAdmin/TableTypeAdmin";
import TableTitleDisplay from "../../../../Utils/Table/TableTitleDisplay/TableTitleDisplay";
import CheckedVideo from "../../../../Utils/CheckedVideo/CheckedVideo";
import videobBack from "../../../../../assets/video/bac1.mp4";
import HomePageHeader from "../../../HomePage/HomePageHeader/HomePageHeader";
import LeftSection from "../../../HomePage/LeftSection/LeftSection";
import LogoTop from "../../../HomePage/HomePageHeader/LogoTop/LogoTop";
import NavBar from "../../../../NavBar/Navbar";
import videoMain from "../../../../../assets/video/login.mp4";

export const City = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const columns = useMemo(() => COLUMNS, []);
	const file = "Dogmate";
	const sheet = "Miasta";
	const textName = "Jesteś w tabeli administracyjnej Miasta";

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
export default City
