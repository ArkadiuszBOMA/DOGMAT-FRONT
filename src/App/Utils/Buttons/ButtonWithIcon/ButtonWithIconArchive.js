import './ButtonWithIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArchive} from '@fortawesome/free-solid-svg-icons'

const ButtonWithIconArchive = props => {

    return (
            <FontAwesomeIcon className="modalButton" type="archive" onClick={props.onClick} icon={faArchive}/>
    )
}
export default ButtonWithIconArchive;