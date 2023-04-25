import './ButtonWithIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

const ButtonWithIconEdit = props => {

    return (
        <FontAwesomeIcon className="modalButton" onClick={props.onClick} icon={faAddressBook}/>
    )
}
export default ButtonWithIconEdit;