import './HomePage.css';
import '../../NavBar/Navbar.css'
import '../../Utils/Table/Filters/GlobalFilter/GlobalFilter.css'
import videobBack from "../../../assets/video/bac1.mp4"
import HomePageHeader from "./HomePageHeader/HomePageHeader";
import MainSection from "./MainSection/MainSection";
import CheckedVideo from "../../Utils/CheckedVideo/CheckedVideo";

const HomePage = props => {

	return (

		<div>
			<CheckedVideo src={videobBack}/>
			<HomePageHeader/>
			<MainSection/>
		</div>
	);
}

export default HomePage;

