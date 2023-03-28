import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "../Pages/HomePage/HomePage";
import About from "../Pages/About/About";

const RouterReact = () => (
	<Router>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<About/>} />
			<Route path="/profile" element={<HomePage/>} />
			<Route path="/admin" element={<HomePage/>} />
		</Routes>
	</Router>
)

export default RouterReact