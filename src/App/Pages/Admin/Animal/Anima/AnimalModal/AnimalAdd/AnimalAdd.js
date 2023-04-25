import './AnimalAdd.css'
import '../../../../../HomePage/HomePage'
import {dataHandler} from "../../../../../../Api/dataHandler";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Spinner from "../../../../../../Utils/Spinners/Spinner";


const AnimalAdd = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();


    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        const dataRow = await dataHandler.addAnimal(data);
        setIsLoading(false);
        if (!dataRow) {
            setIsError(true);
            return;
        }
        window.location.reload();
    }

    const contentModal = `modal ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentModal}>
            {isError ? <ErrorModal text="Nazwa musi mieć długość minimalną 5 i maksymalną 50 znaków"/> : null}
            <h2 className="modal-header">Dodaj zwierzaka</h2>
            <form className="modal" onSubmit={onSubmitClick}>
                <input type="text" name="name" placeholder="Podaj nazwę zwierzaka"></input>
                <br/>
                <input type="text" name="description" placeholder="Dodaj opis"></input>
                <br/>
                <button className="filterGlobalBox" type="submit">Wykonaj</button>
                <button className="filterGlobalBox" id="Excel" title="Close" onClick={props.onClose}>Zamknij</button>
            </form>
            </div>
        </div>
    )
}


export default AnimalAdd;
