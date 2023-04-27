import './HomePage.css';
import '../../NavBar/Navbar.css'
import videobBack from "../../../assets/video/bac1.mp4"
import HomePageHeader from "./HomePageHeader/HomePageHeader";
import MainSection from "./MainSection/MainSection";
import CheckedVideo from "../../Utils/CheckedVideo/CheckedVideo";
import {useEffect, useState} from "react";
import {authenticate} from "../../Authenticate/authenticate";
import * as FaIcons from "react-icons/fa";
import NavBar from "../../NavBar/Navbar";

const HomePage = props => {

	const [sideBar,setSideBar]= useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const user = authenticate.getAppUser();
		user ? setIsLoggedIn(true) : setIsLoggedIn(false);
	}, []);

	const showSideBar = () => setSideBar(!sideBar);

	return (

		<div>
			<CheckedVideo src={videobBack}/>
			<HomePageHeader/>
			<div className="navbar">
				<FaIcons.FaBars onClick={showSideBar}/>
				<NavBar className={sideBar? "nav-menu active" : 'nav-menu' }/>
			</div>
			<MainSection/>
		</div>
	);
}

export default HomePage;

