import "./AnimalTypeUpdate.css"
import {dataHandler} from "../../../../../../Api/dataHandler";
import {useState} from "react";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {useNavigate} from "react-router-dom";
import Spinner from "../../../../../../Utils/Spinners/Spinner";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const AnimalTypeAdd = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        console.log('dane przesłane do formularza')
        console.log(props.dataRow.id.valueOf())
        console.log(props.dataRow.name.valueOf())
        console.log(props.dataRow.description.valueOf())

        const data = Object.fromEntries(new FormData(e.target).entries());
        console.log('dane zmienione przez usera')
        console.log(data.id)
        console.log(data.name)
        console.log(data.description)

        const dataRow = await dataHandler.updateAnimalType(data);
        setIsLoading(false);
        if (!dataRow) {
            setIsError(true);
        }
    }

    const contentClasses = `signUpContent ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentClasses}>
                {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
                <FontAwesomeIcon onClick={props.onClose} icon={faClose}></FontAwesomeIcon>
                <h2 className="text">Uaktualnij dane zwierzaka</h2>
                <form className="add" onSubmit={onSubmitClick}>
                    <input type="hidden" name="id" value={props.dataRow.id.valueOf()}></input>
                    <input type="text" name="name" placeholder="Podaj nazwę zwierzaka" defaultValue={props.dataRow.name.valueOf()}></input>
                    <input className="modal-header" type="text" name="description" placeholder="Dodaj opis" defaultValue={props.dataRow.description.valueOf()}></input>
                    <button className="submitButton" type="submit">Wykonaj</button>
                </form>
            </div>
        </div>
    )
}


export default AnimalTypeAdd;
