import "AnimalTypeUpdateContent.css"
import {dataHandler} from "../../../../../../../Api/dataHandler";
import {useState} from "react";
import ErrorModal from "../../../../../../../Utils/ErrorModal/ErrorModal";

const AnimalTypeUpdata = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    async function onSubmitClick(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        const dataRow = await dataHandler.addNewAnimalType(data, data.id);
    }


    return (
        <div>
            {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
            <h2 className="text">Dodaj zwierzaka</h2>
            <form className="add" onSubmit={onSubmitClick}>
                <input type="hidden" name="id" placeholder="ID zwierzaka"></input>
                <input type="text" name="name" placeholder="Podaj nazwę zwierzaka"></input>
                <button className="submitButton" type="submit">Wykonaj</button>
            </form>
        </div>
    )
}


export default AnimalTypeUpdata;
