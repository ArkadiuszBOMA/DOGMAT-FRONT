import './HomePage.css';
import NavBar from "./NavBar/Navbar";
import videoMain from "../../assets/video/bac1.mp4";
import MiddleSection from "./MiddleSection/MiddleSection";

const HomePage = props => {
	return (
		<div>
			<video className="video" src={videoMain} autoPlay loop muted />
			<NavBar/>
			<MiddleSection/>
		</div>
	);
}

export default HomePage;

