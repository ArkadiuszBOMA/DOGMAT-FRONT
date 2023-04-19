// CSS do stylizacji
import './LogInContent.css'

// Funkcje wbudowane
import {dataHandler} from "../../../../Api/dataHandler";
import {authenticate} from "../../../../Authenticate/authenticate";

// REACT-towe rzeczy
import {useState} from "react";
import {useNavigate} from "react-router-dom";

// Potrzebne rzeczy z innych komponentów
import ErrorModal from "../../../../Utils/ErrorModal/ErrorModal";
import Spinner from "../../../../Utils/Spinners/Spinner";


const LogInContent = props => {

    // Zmienne
    // zmienne do ustalenie po co to jest
    const [isLoading, setIsLoading] = useState(false);

    // zmienne do obsługi błędów HOOK [Zmienne, Funkcja]- domyślnie nie ma błędów w stacie
    const [isError, setIsError] = useState(false);

    // zmienne do obsługi odwołań
    const navigate = useNavigate();

    // asynchroniczna funkcja do obsługi formularza
    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);

        const data = Object.fromEntries(new FormData(e.target).entries());
        const user = await dataHandler.loginUser(data);
        setIsLoading(false);
        if (!user) {
            setIsError(true);
            return;
        }
        navigate('/About');
        authenticate.loginUser(user.id, user.email, user.firstName, user.lastName, user.avatarSmallLocation, user.token);
    }

    const contentClasses = `logInContent ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentClasses}>
                {isError ? <ErrorModal text="Niepoprawne dane !"/> : null}
                <h2 className="text">Zaloguj się</h2>
                    <form className="loginUpForm" onSubmit={onSubmitClick}>
                        <input className="" type="text" name="email" placeholder="Email"></input>
                        <input className="" type="password" name="password" placeholder="Password"></input>
                        <button className="submitButton" type="submit">Wykonaj</button>
                    </form>
            </div>
        </div>
    )
}


export default LogInContent;
