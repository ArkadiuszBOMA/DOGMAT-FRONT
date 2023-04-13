import './ButtonWithIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArchive} from '@fortawesome/free-solid-svg-icons'

const ButtonWithIconEdit = props => {

    return (
        <div>
            <button onClick={props.onClick}>
                <FontAwesomeIcon icon={faArchive}/>
            </button>
        </div>
    )
}
export default ButtonWithIconEdit;