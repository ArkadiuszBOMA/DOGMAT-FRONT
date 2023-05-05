import "./ProvinceUpdate.css"
import {dataHandler} from "../../../../../../Api/dataHandler";
import {useEffect, useState} from "react";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";

import {faClose} from "@fortawesome/free-solid-svg-icons";


const ProvinceUpdate = props => {

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
        const data = Object.fromEntries(new FormData(e.target).entries());
        const dataRow = await dataHandler.updateProvince(data);
        window.location.reload()
    }

    const contentClasses = `signUpContent ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            <div className={contentClasses}>
                {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
                <h2 className="text">Dodaj zwierzaka</h2>
                <form className="add" onSubmit={onSubmitClick}>
                    <input type="hidden" name="id"></input>
                    <input type="text" name="name" placeholder="Podaj nazwę powiatu" defaultValue={props.dataRow.name.valueOf()}></input>
                    <br/>
                    <input className="formHeader" type="text" name="terytId" placeholder="TERYT" defaultValue={props.dataRow.terytId.valueOf()}></input>
                    <br/>
                    <select className="filterGlobalBox" name="voivodeship">
                        <option value="">Wybierz województwo</option>
                        {optionList.map(selectedItem =>
                            <option value={selectedItem.id} key={selectedItem.name} >{selectedItem.name} </option>
                        )}
                    </select>
                    <br/>
                    <button className="filterGlobalBox" type="submit"><i className={faClose}></i> Wykonaj</button>
                    <button className="filterGlobalBox" type="close" id="Close" title="Zamknij" onClick={props.onClose}> Zamknij</button>
                </form>
            </div>
        </div>
    )
}


export default ProvinceUpdate;
