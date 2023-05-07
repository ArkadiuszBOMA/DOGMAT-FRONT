import "./TrainingTypeUpdate.css"
import {dataHandler} from "../../../../../../Api/dataHandler";
import {useEffect, useState} from "react";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import ImagesLoader from "../../../../../../Utils/ImagesLoader/ImagesLoader";
import {faClose} from "@fortawesome/free-solid-svg-icons";


const TrainingTypeUpdate = props => {

    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [optionList,setOptionList] = useState([{'name':"id"}])

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const databaseData = await dataHandler.getTrainingLevels();
            setOptionList(databaseData);
            setIsLoading(false);
        }
        fetchData();
    }, [])

    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        data.imageLocation = ImagesLoader.File
        const dataRow = await dataHandler.addTrainingType(data);
        setIsLoading(false);
        if (!dataRow) {
            setIsError(true);
            return;
        }
        window.location.reload();
    }

    return (
        <div>
                {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
            <h2 className="anyContentModalTitle">Uaktualnij trening</h2>
            <form className="modal" onSubmit={onSubmitClick}>
                <input className="filterGlobalBox" type="hidden" name="id"></input>
                <input className="filterGlobalBox" type="text" name="name" placeholder="Nazwa" defaultValue={props.dataRow.name.valueOf()}></input>
                <br/>
                <ImagesLoader type="file" name="imageLocation"/>
                <br/>
                <select className="filterGlobalBox" name="trainingLevel">
                    <option className="filterGlobalBox" value="">Zmień  poziom trudności</option>
                    {optionList.map(selectedItem =>
                        <option className="filterGlobalBox" value={selectedItem.id} key={selectedItem.name} defaultValue={props.dataRow.name.valueOf()}>{selectedItem.name}</option>
                    )}
                </select>
                <br/>
                <textarea className="formDescription" rows="15" cols="40" name="description" placeholder="Dodaj opis" defaultValue={props.dataRow.description.valueOf()}></textarea>
                <br/>
                <button className="filterGlobalBox" type="submit"><i className={faClose}></i> Wykonaj</button>
                <button className="filterGlobalBox" type="close" id="Close" title="Zamknij" onClick={props.onClose}> Zamknij</button>
            </form>
            </div>
    )
}


export default TrainingTypeUpdate;
