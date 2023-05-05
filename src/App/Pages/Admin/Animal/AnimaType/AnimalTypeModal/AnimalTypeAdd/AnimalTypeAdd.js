import '../../../../../../Utils/CSS/BasicForms.css';
import '../../../../../../Utils/Modals/AnyContentModal.css';
import {dataHandler} from "../../../../../../Api/dataHandler";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {useState} from "react";
import Spinner from "../../../../../../Utils/Spinners/Spinner";


const AnimalTypeAdd = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

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
        window.location.reload();
    }
    const contentModal = `modal ${isLoading ? "hidden" : ""}`;
    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentModal}>
                {isError ? <ErrorModal text="Nazwa musi mieć długość minimalną 5 i maksymalną 50 znaków"/> : null}
                <h2 className="anyContentModalTitle">Dodaj zwierzaka</h2>
                <form className="modal" onSubmit={onSubmitClick}>
                    <input className="filterGlobalBox" type="text" name="name" placeholder="Podaj nazwę zwierzaka"></input>
                    <br/>
                    <textarea className="formDescription" rows="15" cols="40" name="description" placeholder="Dodaj opis"></textarea>
                    <br/>
                    <button className="filterGlobalBox" type="submit"> Dodaj</button>
                    <button className="filterGlobalBox" type="close" id="Close" title="Zamknij" onClick={props.onClose}> Zamknij</button>
                </form>
            </div>
        </div>
    )
}


export default AnimalTypeAdd;
