import "./VoivodeshipUpdate.css"
import {dataHandler} from "../../../../../../Api/dataHandler";
import {useState} from "react";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {faClose} from "@fortawesome/free-solid-svg-icons";


const VoivodeshipUpdate = props => {

    const [isLoading] = useState(false);
    const [isError] = useState(false);

    async function onSubmitClick(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        const dataRow = await dataHandler.updateVoivodeship(data);
        window.location.reload()
    }

    const contentClasses = `signUpContent ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            <div className={contentClasses}>
                {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
                <h2 className="anyContentModalTitle">Uaktualnij dane województwa</h2>
                <form className="add" onSubmit={onSubmitClick}>
                    <input type="hidden" name="id" value={props.dataRow.id.valueOf()}></input>
                    <input className="formHeader" type="text" name="name" placeholder="Podaj nazwę województwa" defaultValue={props.dataRow.name.valueOf()}></input>
                    <br/>
                    <input className="formHeader" type="text" name="terytId" placeholder="TERYT" defaultValue={props.dataRow.terytId.valueOf()}></input>
                    <br/>
                    <button className="filterGlobalBox" type="submit"><i className={faClose}></i> Wykonaj</button>
                    <button className="filterGlobalBox" type="close" id="Close" title="Zamknij" onClick={props.onClose}> Zamknij</button>
                </form>
            </div>
        </div>
    )
}


export default VoivodeshipUpdate;
