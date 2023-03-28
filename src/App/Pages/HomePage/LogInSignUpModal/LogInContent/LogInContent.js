import './LogInContent.css'
import {dataHandler} from "../../../../Utils/Api/dataHandler";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ErrorModal from "../ErrorModal/ErrorModal";
import Spinner from "../../../../Utils/Spinners/Spinner";
import {authenticate} from "../../../../Authenticate/authenticate";

const LogInContent = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        const user = await dataHandler.logInAppUser(data);
        setIsLoading(false);
        if (!user) {
            setIsError(true);
            return;
        }
        navigate('register');
        authenticate.loginUser(user.email, user.password);
    }

    const contentClasses = `logInContent ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentClasses}>
                {isError ? <ErrorModal text="Niepoprawne dane !"/> : null}
                    <form className="loginUpForm" onSubmit={onSubmitClick}>
                        <h2 className="text">Psyjacielu zaloguj się</h2>
                        <input className="" type="text" name="email" placeholder="Email"></input>
                        <input className="" type="password" name="password" placeholder="Password"></input>
                        <button className="submitButton" type="submit">Wykonaj</button>
                    </form>
            </div>
        </div>
    )
}


export default LogInContent;
