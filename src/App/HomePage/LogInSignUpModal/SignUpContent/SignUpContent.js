import './SignUpContent.css'
import {dataHandler} from "../../../Api/dataHandler";
import {useState} from "react";
import Spinner from "../../../Spinners/Spinner";
import { useNavigate } from 'react-router-dom';
import ErrorModal from "../ErrorModal/ErrorModal";
import {authenticate} from "../../../Authenticate/authenticate";

const SignUpContent = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        delete data.repeatPassword;
        const user = await dataHandler.addNewUser(data);
        setIsLoading(false);
        if (!user) {
            setIsError(true);
            return;
        }
        navigate('/HomePage');
        authenticate.loginUser(user.id, user.email, user.userType);
    }

    const contentClasses = `signUpContent ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentClasses}>
                {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
                <form className="signUpForm" onSubmit={onSubmitClick}>
                    <h2 className="text">Zarejestruj się jako nowy Psyjaciel</h2>
                    <input type="text" name="firstName" placeholder="Imię"></input>
                    <input type="text" name="lastName" placeholder="Nazwisko"></input>
                    <input type="email" name="email" placeholder="Email"></input>
                    <input type="password" name="password" placeholder="Hasło"></input>
                    <input type="password" name="repeatPassword" placeholder="Powtórz hasło"></input>
                    <input type="hidden" value={1}></input>
                    <input type="hidden" value={0}></input>
                    <button className="submitButton" type="submit">Wykonaj</button>
                </form>
            </div>
        </div>
    )
}


export default SignUpContent;
