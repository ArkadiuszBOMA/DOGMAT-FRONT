import './ButtonWithIcon.css'
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ButtonWithIconClose = props => {

    return (
            <FontAwesomeIcon className="modalButton" onClick={props.onClick} icon={faTimesCircle}/>
    )
}
export default ButtonWithIconClose;