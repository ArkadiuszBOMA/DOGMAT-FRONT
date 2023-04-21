import './ButtonWithIcon.css'
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ButtonWithIconAddress = props => {

    return (
        <div className="modalButton">
            <FontAwesomeIcon onClick={props.onClick} icon={faTimesCircle}/>
        </div>
    )
}
export default ButtonWithIconAddress;