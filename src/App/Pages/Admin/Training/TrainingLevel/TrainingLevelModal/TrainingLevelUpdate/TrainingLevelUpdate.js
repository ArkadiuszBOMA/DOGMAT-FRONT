import "./TrainingLevelUpdate.css"
import {dataHandler} from "../../../../../../Api/dataHandler";
import {useState} from "react";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {faClose} from "@fortawesome/free-solid-svg-icons";


const TrainingLevelUpdate = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    async function onSubmitClick(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        const dataRow = await dataHandler.updateTrainingLevel(data);
        window.location.reload()
    }

    const contentClasses = `signUpContent ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            <div className={contentClasses}>
                {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
                <h2 className="anyContentModalTitle">Uaktualnij poziom trudności</h2>
                <form className="modal" onSubmit={onSubmitClick}>
                    <input type="hidden" name="id"></input>
                    <input className="filterGlobalBox" type="text" name="name" defaultValue={props.dataRow.name.valueOf()}></input>
                    <br/>
                    <textarea className="formDescription" rows="15" cols="40" name="description" defaultValue={props.dataRow.description.valueOf()}></textarea>
                    <br/>
                    <button className="filterGlobalBox" type="submit"><i className={faClose}></i> Uaktualnij </button>
                    <button className="filterGlobalBox" type="close" id="Close" title="Zamknij" onClick={props.onClose}> Zamknij</button>
                </form>
            </div>
        </div>
    )
}


export default TrainingLevelUpdate;
