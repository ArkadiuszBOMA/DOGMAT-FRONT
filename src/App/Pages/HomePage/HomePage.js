import './HomePage.css';
import videobBack from "../../../assets/video/bac1.mp4"
import HomePageHeader from "./HomePageHeader/HomePageHeader";
import LeftSection from "./LeftSection/LeftSection";
import MainSection from "./MainSection/MainSection";
import CheckedVideo from "../../Utils/CheckedVideo/CheckedVideo";

const HomePage = props => {

	return (
		<div>
			<CheckedVideo src={videobBack}/>
			<HomePageHeader/>
			<LeftSection/>
			<MainSection/>
		</div>
	);
}

export default HomePage;

