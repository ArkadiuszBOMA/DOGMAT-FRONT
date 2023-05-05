// CSS do stylizacji
import './LogInContent.css'
import '../../../../Utils/CSS/BasicForms.css';

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
                <h2>Zaloguj się</h2>
                    <form onSubmit={onSubmitClick}>
                        <input className="filterGlobalBox" type="text" name="email" placeholder="Email"></input>
                        <br/>
                        <input className="filterGlobalBox" type="password" name="password" placeholder="Password"></input>
                        <br/>
                        <button className="filterGlobalBox" type="submit">Wykonaj</button>
                        <br/>
                        <button className="filterGlobalBox" type="close" id="Close" title="Zamknij" onClick={props.onClose}> Zamknij</button>
                    </form>
            </div>
        </div>
    )
}


export default LogInContent;
