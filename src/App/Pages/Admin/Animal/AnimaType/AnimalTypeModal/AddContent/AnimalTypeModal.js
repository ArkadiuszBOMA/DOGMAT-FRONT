import './LogInSignUpModal.css'
import AnimalTypeUpdateContent from "./AnimalTypeUpdate/AnimalTypeUpdateContent";
import AnimalTypeArchiveContent from "./AnimalTypeUpdate/AnimalTypeArchiveContent";

const AnimalTypeModal = props => {

    return (
        <div className="modal">
            <div className="modal-content">
                <span onClick={props.onClose} className="close">&times;</span>
                {props.isSignUp ? <AnimalTypeArchiveContent/> : <AnimalTypeUpdateContent/>}
            </div>
        </div>
    )
}


export default AnimalTypeModal;
