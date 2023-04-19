import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "../Pages/HomePage/HomePage";
import About from "../Pages/About/About";


import AnimalType from "../Pages/Admin/Animal/AnimaType/AnimalTypes";
import Breeds from "../Pages/Admin/Animal/Breed/Breeds";

import AppUser from "../Pages/Admin/AppUser/AppUsers/AppUserModal/AppUser";
import UserRole from "../Pages/Admin/AppUser/UserRole/UserRole";
import UserPrivilege from "../Pages/Admin/AppUser/UserPrivilege/UserPrivilege";

import CareAnnouncement from "../Pages/Admin/Care/CareType/CareType";

import Cities from "../Pages/Admin/Localization/City/City";
import Provinces from "../Pages/Admin/Localization/Province/Provinces";
import Voivodeship from "../Pages/Admin/Localization/Voivodeship/Voivodeship";


import TimeUnit from "../Pages/Admin/Training/TimeUnit/TimeUnit";
import TrainingLevel from "../Pages/Admin/Training/TrainingLevel/TrainingLevel";
import TrainingStep from "../Pages/Admin/Training/TrainingStep/TrainingStep";
import TrainingType from "../Pages/Admin/Training/TrainingType/TrainingType";



const RouterReact = () => (
	<Router>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<HomePage />} />
			<Route path="/about" element={<About/>} />
			<Route path="/user" element={<AppUser/>} />

			<Route path="/cities" element={<Cities/>} />
			<Route path="/provinces" element={<Provinces/>} />
			<Route path="/voivodeships" element={<Voivodeship/>} />

			<Route path="/animal-types" element={<AnimalType/>} />
			<Route path="/breeds" element={<Breeds/>} />

			<Route path="/training-types" element={<TrainingType/>} />
			<Route path="/training-levels" element={<TrainingLevel/>} />
			<Route path="/training-steps" element={<TrainingStep/>} />
			<Route path="/time-units" element={<TimeUnit/>} />

			<Route path="/care-announcement" element={<CareAnnouncement/>} />

			<Route path="/user-roles" element={<UserRole/>} />
			<Route path="/user-privilege" element={<UserPrivilege/>} />
		</Routes>
	</Router>
)

export default RouterReact