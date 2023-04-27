import './ButtonWithIcon.css'
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ButtonWithIconSubmit = props => {

    return (
            <FontAwesomeIcon className="modalButton" onClick={props.onClick} icon={faSave}/>
    )
}
export default ButtonWithIconSubmit;