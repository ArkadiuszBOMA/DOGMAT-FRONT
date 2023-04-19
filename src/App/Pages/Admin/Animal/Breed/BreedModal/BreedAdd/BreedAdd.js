import './BreedAdd.css'
import {dataHandler} from "../../../../../../Api/dataHandler";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Spinner from "../../../../../../Utils/Spinners/Spinner";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const BreedAdd = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();


    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        const dataRow = await dataHandler.addBreeds(data);
        setIsLoading(false);
        if (!dataRow) {
            setIsError(true);
            return;
        }
        navigate('/breeds');
    }
    const contentModal = `modal ${isLoading ? "hidden" : ""}`;
    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentModal}>
                {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
                <FontAwesomeIcon onClick={props.onClose} icon={faClose}></FontAwesomeIcon>
                <h2 className="modal-header">Dodaj Miasto</h2>
                <form className="modal" onSubmit={onSubmitClick}>
                    <input className="modal-header" type="text" name="name" placeholder="Podaj nazwę miasta"></input>
                    <input className="modal-header" type="number" name="province" placeholder="Wybierz powiat"></input>
                    <button className="submitButton" type="submit">Wykonaj</button>
                </form>
            </div>
        </div>
    )
}


export default BreedAdd;
