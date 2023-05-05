import './ButtonWithIcon.css'
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ButtonWithIconClose = props => {

    return (
            <FontAwesomeIcon className="modalButton" type="close" onClick={props.onClick} icon={faTimesCircle} text="Zamknij"/>
    )
}
export default ButtonWithIconClose;