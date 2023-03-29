import './Animal.css';
import NavBar from "../../../../NavBar/Navbar";
import videoMain from "../../../../../assets/video/bac1.mp4";
import AnimalsTable from "./AniamlsTable/AnimalsTable";

const Animal = props => {
	return (
		<div>
			<video className="video" src={videoMain} autoPlay loop muted />
			<NavBar/>
			<AnimalsTable/>
		</div>
	);
}

export default Animal;

