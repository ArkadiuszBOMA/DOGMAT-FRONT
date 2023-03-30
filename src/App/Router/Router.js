import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "../Pages/HomePage/HomePage";
import About from "../Pages/About/About";
import Voivodeship from "../Pages/Admin/Localization/Voivodeship/Voivodeship";
import Provinces from "../Pages/Admin/Localization/Province/Provinces";
import Cities from "../Pages/Admin/Localization/City/City";

const RouterReact = () => (
	<Router>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<About/>} />
			<Route path="/voivodeships" element={<Voivodeship/>} />
			<Route path="/provinces" element={<Provinces/>} />
			<Route path="/cities" element={<Cities/>} />
			<Route path="/admin" element={<HomePage/>} />
		</Routes>
	</Router>
)

export default RouterReact