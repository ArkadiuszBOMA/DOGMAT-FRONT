import '../HomePage.css'
import LogoTop from "./LogoTop/LogoTop";

const HomePageHeader = props => {
	return (
		<div className="p-3 bg-transparent text-white">
			<div className="container">
				<LogoTop/>
				<button type="button" className="btn btn-warning">Wyjdż</button>
			</div>
		</div>
	);
}
export default HomePageHeader;

