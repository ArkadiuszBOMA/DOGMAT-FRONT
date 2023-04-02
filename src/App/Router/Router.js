import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "../Pages/HomePage/HomePage";
import About from "../Pages/About/About";
import Voivodeship from "../Pages/Admin/Localization/Voivodeship/Voivodeship";
import Provinces from "../Pages/Admin/Localization/Province/Provinces";
import Cities from "../Pages/Admin/Localization/City/City";
import AnimalType from "../Pages/Admin/Animal/AnimaType/AnimalTypes";
import Breeds from "../Pages/Admin/Animal/Breed/Breeds";
import TimeUnit from "../Pages/Admin/Training/TimeUnit/TimeUnit";
import TrainingLevel from "../Pages/Admin/Training/TrainingLevel/TrainingLevel";
import TrainingStep from "../Pages/Admin/Training/TrainingStep/TrainingStep";
import TrainingType from "../Pages/Admin/Training/TrainingType/TrainingType";
import UserType from "../Pages/Admin/AppUser/UserType/UserType";

const RouterReact = () => (
	<Router>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<About/>} />
			<Route path="/voivodeships" element={<Voivodeship/>} />
			<Route path="/provinces" element={<Provinces/>} />
			<Route path="/cities" element={<Cities/>} />
			<Route path="/animal-types" element={<AnimalType/>} />
			<Route path="/breeds" element={<Breeds/>} />
			<Route path="/training-types" element={<TrainingType/>} />
			<Route path="/training-levels" element={<TrainingLevel/>} />
			<Route path="/training-steps" element={<TrainingStep/>} />
			<Route path="/time-units" element={<TimeUnit/>} />
			<Route path="/user-types" element={<UserType/>} />
			<Route path="/admin" element={<HomePage/>} />
		</Routes>
	</Router>
)

export default RouterReact