import './ButtonWithIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

const ButtonWithIconAddress = props => {

    return (
        <div>
            <button onClick={props.onClick}>
                <FontAwesomeIcon icon={faAddressBook}/>
            </button>
        </div>
    )
}
export default ButtonWithIconAddress;