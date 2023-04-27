import './ButtonWithIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrain, faTrash} from '@fortawesome/free-solid-svg-icons'

const ButtonWithIconDelete = props => {

    return (
            <FontAwesomeIcon  className="modalButton" onClick={props.onClick} icon={faTrash}/>
    )
}
export default ButtonWithIconDelete;