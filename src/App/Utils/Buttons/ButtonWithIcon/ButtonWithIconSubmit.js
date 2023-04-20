import './ButtonWithIcon.css'
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ButtonWithIconSubmit = props => {

    return (
        <div>
            <FontAwesomeIcon onClick={props.onClick} icon={faEdit}/>
        </div>
    )
}
export default ButtonWithIconSubmit;