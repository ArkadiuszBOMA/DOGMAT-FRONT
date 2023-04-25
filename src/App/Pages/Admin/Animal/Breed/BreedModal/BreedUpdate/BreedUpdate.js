import "./BreedUpdate.css"
import {dataHandler} from "../../../../../../Api/dataHandler";
import {useState} from "react";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {useNavigate} from "react-router-dom";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Spinner from "../../../../../../Utils/Spinners/Spinner";


const BreedUpdate = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    async function onSubmitClick(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        const dataRow = await dataHandler.updateBreed(data);
        navigate('/breeds');
    }

    const contentModal = `modal ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentModal}>
                {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
                <h2 className="text">Dodaj zwierzaka</h2>
                <FontAwesomeIcon onClick={props.onClose} icon={faClose}></FontAwesomeIcon>
                <form className="add" onSubmit={onSubmitClick}>
                    <input type="hidden" name="id"></input>
                    <input type="text" name="name" placeholder="Podaj nazwę zwierzaka"></input>
                    <button className="submitButton" type="submit">Wykonaj</button>
                </form>
            </div>
        </div>
    )
}


export default BreedUpdate;
