import "./TableTitleDisplay.css"
import "../../../Pages/HomePage/HomePage.css"


export const TableTitleDisplay = (props) => {

	return (
		<article>
			<h4 className="tableTitle">{props.textName}</h4>
		</article>

	)
}
export default TableTitleDisplay
