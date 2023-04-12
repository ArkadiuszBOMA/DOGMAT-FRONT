import './ButtonWithIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const ButtonWithIconAddress = props => {

    return (
        <div>
            <button onClick={props.onClick}>
                <FontAwesomeIcon icon={faClose}/>
            </button>
        </div>
    )
}
export default ButtonWithIconAddress;