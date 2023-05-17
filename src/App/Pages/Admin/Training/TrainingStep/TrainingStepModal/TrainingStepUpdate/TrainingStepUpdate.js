import "./TrainingStepUpdate.css"
import {dataHandler} from "../../../../../../Api/dataHandler";
import {useEffect, useState} from "react";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";


const TrainingStepUpdate = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [optionList,setOptionList] = useState([{'name':"id"}])

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const databaseData = await dataHandler.getTrainingType();
            setOptionList(databaseData);
            setIsLoading(false);
        }
        fetchData();
    }, [])

    async function onSubmitClick(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        const dataRow = await dataHandler.updateTrainingStep(data);
        window.location.reload()
    }

    const contentClasses = `signUpContent ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            <div className={contentClasses}>
                {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
                <h2 className="text">Dodaj zwierzaka</h2>
                <FontAwesomeIcon onClick={props.onClose} icon={faClose}></FontAwesomeIcon>
                <h2 className="anyContentModalTitle">Dodaj kroki treningu</h2>
                <form className="modal" onSubmit={onSubmitClick}>
                    <input className="filterGlobalBox" type="text" name="name" placeholder="Nazwa kroku" defaultValue={props.dataRow.name.valueOf()}></input>
                    <br/>
                    <input className="filterGlobalBox" type="number" name="stepNumber" placeholder="Numer kroku" defaultValue={props.dataRow.stepNumber.valueOf()}></input>
                    <br/>
                    <select className="filterGlobalBox" name="lesson">
                        <option value="">Wybierz Trening</option>
                        {optionList.map(selectedItem =>
                            <option value={selectedItem.id} key={selectedItem.name} >{selectedItem.name} </option>
                        )}
                    </select>
                    <br/>
                    <textarea className="formDescription" rows="15" cols="40" name="description" placeholder="Dodaj opis" defaultValue={props.dataRow.description.valueOf()}></textarea>
                    <br/>
                    <button className="filterGlobalBox" type="submit"><i className={faClose}></i> Wykonaj</button>
                    <button className="filterGlobalBox" type="close" id="Close" title="Zamknij" onClick={props.onClose}> Zamknij</button>
                </form>
            </div>
        </div>
    )
}


export default TrainingStepUpdate;
