import "AnimalTypeUpdateContent.css"
import {dataHandler} from "../../../../../../../Api/dataHandler";
import {useState} from "react";
import ErrorModal from "../../../../../../../Utils/ErrorModal/ErrorModal";

const AnimalTypeArchive = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    async function onSubmitClick(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        const dataRow = await dataHandler.archiveAnimalTypes(data, data.id);
    }

    return (
        <div>
            {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
                <button className="submitButton" type="submit">Archiwizuj</button>
        </div>
    )
}


export default AnimalTypeArchive;
