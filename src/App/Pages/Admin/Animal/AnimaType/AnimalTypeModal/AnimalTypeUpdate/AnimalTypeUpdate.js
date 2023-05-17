import "./AnimalTypeUpdate.css"
import '../../../../../../Utils/CSS/BasicForms.css';
import {dataHandler} from "../../../../../../Api/dataHandler";
import {useState} from "react";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {useNavigate} from "react-router-dom";
import Spinner from "../../../../../../Utils/Spinners/Spinner";
import {faClose} from "@fortawesome/free-solid-svg-icons";


const AnimalTypeUpdate = (props) => {
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
        window.location.reload()
    }

const contentModal = `modal ${isLoading ? "hidden" : ""}`;
return (
    <div>
        {isLoading ? <Spinner/> : null}
        <div className={contentModal}>
            {isError ? <ErrorModal text="Nazwa musi mieć długość minimalną 5 i maksymalną 50 znaków"/> : null}
            <h2 className="anyContentModalTitle">Uaktualnij dane zwierzaka</h2>
            <form className="modal" onSubmit={onSubmitClick}>
                <input type="hidden" name="id" value={props.dataRow.id.valueOf()}></input>
                <input className="formHeader" type="text" name="name" placeholder="Podaj nazwę zwierzaka" defaultValue={props.dataRow.name.valueOf()}></input>
                <br/>
                <textarea className="formDescription" rows="15" cols="40" name="description" placeholder="Dodaj opis" defaultValue={props.dataRow.description.valueOf()}></textarea>
                <br/>
                <button className="filterGlobalBox" type="submit"><i className={faClose}></i>Uaktualnij</button>
                <button className="filterGlobalBox" type="close" id="Close" title="Zamknij" onClick={props.onClose}> Zamknij</button>
            </form>
        </div>
    </div>
)
}

export default AnimalTypeUpdate;
