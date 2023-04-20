import './AnimalTypeAdd.css'
import {dataHandler} from "../../../../../../Api/dataHandler";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Spinner from "../../../../../../Utils/Spinners/Spinner";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faEdit} from "@fortawesome/free-solid-svg-icons";


const AnimalTypeAdd = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();


    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        const dataRow = await dataHandler.addAnimalType(data);
        setIsLoading(false);
        if (!dataRow) {
            setIsError(true);
            return;
        }
        navigate('/animal-types');
    }
    const contentModal = `modal ${isLoading ? "hidden" : ""}`;
    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentModal}>
                <FontAwesomeIcon onClick={props.onClose} icon={faClose}></FontAwesomeIcon>
                {isError ? <ErrorModal text="Nazwa musi mieć długość minimalną 5 i maksymalną 50 znaków"/> : null}
                <h2 className="modal-header">Dodaj zwierzaka</h2>
                <form className="modal" onSubmit={onSubmitClick}>
                    <input className="modal-header" type="text" name="name" placeholder="Podaj nazwę zwierzaka"></input>
                    <input className="modal-header" type="text" name="description" placeholder="Dodaj opis"></input>
                    <button className="submitButton" type="submit">Wykonaj</button>
                </form>
            </div>
        </div>
    )
}


export default AnimalTypeAdd;
