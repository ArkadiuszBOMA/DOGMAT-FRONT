import './UserRoleAdd.css'
import {dataHandler} from "../../../../../../Api/dataHandler";
import {useState} from "react";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {useNavigate} from "react-router-dom";
import Spinner from "../../../../../../Utils/Spinners/Spinner";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const UserRoleAdd = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        const dataRow = await dataHandler.addUserRole(data);
        setIsLoading(false);
        if (!dataRow) {
            setIsError(true);
        }
        navigate('/user-roles');
    }

    const contentModal = `modal ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentModal}>
                {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
                <FontAwesomeIcon onClick={props.onClose} icon={faClose}></FontAwesomeIcon>
                <h2 className="modal-header">Dodaj zwierzaka</h2>
                <form className="modal" onSubmit={onSubmitClick}>
                    <input className="modal-header" type="text" name="name" placeholder="Podaj nazwę rasy"></input>
                    <input className="modal-header" type="text" name="animalType" placeholder="Wybierz zwierzaka"></input>
                    <button className="submitButton" type="submit">Wykonaj</button>
                </form>
            </div>
        </div>
    )
}


export default UserRoleAdd;
