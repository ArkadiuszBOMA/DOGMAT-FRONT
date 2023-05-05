import './TrainingLevelAdd.css'
import '../../../../../../Utils/CSS/BasicForms.css'
import {dataHandler} from "../../../../../../Api/dataHandler";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {useEffect, useState} from "react";
import Spinner from "../../../../../../Utils/Spinners/Spinner";
import ButtonWithIconClose from "../../../../../../Utils/Buttons/ButtonWithIcon/ButtonWithIconClose";
import {faClose} from "@fortawesome/free-solid-svg-icons";


const TrainingLevelAdd = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [optionList,setOptionList] = useState([{'name':"id"}])


    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const databaseData = await dataHandler.getVoivodeships();
            setOptionList(databaseData);
            setIsLoading(false);
        }
        fetchData();
    }, [])


    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        const dataRow = await dataHandler.addTrainingLevel(data);
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
                {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
                <ButtonWithIconClose onClick={props.onClose} className="close"></ButtonWithIconClose>
                <h2 className="anyContentModalTitle">Dodaj poziom trudności</h2>
                <form className="modal" onSubmit={onSubmitClick}>
                    <input className="filterGlobalBox" type="text" name="name" placeholder="Nazwa poziomu"></input>
                    <br/>
                    <textarea className="formDescription" rows="15" cols="40" name="description" placeholder="Dodaj opis"></textarea>
                    <br/>
                    <button className="filterGlobalBox" type="submit"><i className={faClose}></i> Wykonaj</button>
                    <button className="filterGlobalBox" type="close" id="Close" title="Zamknij" onClick={props.onClose}> Zamknij</button>
                </form>
            </div>
        </div>
    )
}


export default TrainingLevelAdd;
