import "./AppUserUpdate.css"
import {dataHandler} from "../../../../../../Api/dataHandler";
import {useState} from "react";
import ErrorModal from "../../../../../../Utils/ErrorModal/ErrorModal";
import {useNavigate} from "react-router-dom";


const AppUserUpdate= props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    async function onSubmitClick(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        const dataRow = await dataHandler.updateAnimalType(data);
        navigate('/animal-type');
    }

    const contentClasses = `signUpContent ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            <div className={contentClasses}>
                {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
                <h2 className="text">Dodaj zwierzaka</h2>
                <form className="add" onSubmit={onSubmitClick}>
                    <input type="hidden" name="id"></input>
                    <input type="text" name="name" placeholder="Podaj nazwę zwierzaka"></input>
                    <button className="submitButton" type="submit">Wykonaj</button>
                </form>
            </div>
        </div>
    )
}


export default AppUserUpdate;
