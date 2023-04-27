import './ButtonWithIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib} from '@fortawesome/free-solid-svg-icons'

const ButtonWithIconEdit = props => {

    return (
        <FontAwesomeIcon className="modalButton" onClick={props.onClick} icon={faPenNib}/>
    )
}
export default ButtonWithIconEdit;