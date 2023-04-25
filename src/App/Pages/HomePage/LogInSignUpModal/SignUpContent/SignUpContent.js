import "./SignUpContent.css"
import {dataHandler} from "../../../../Api/dataHandler";
import {useState} from "react";
import Spinner from "../../../../Utils/Spinners/Spinner";
import { useNavigate } from 'react-router-dom';
import ErrorModal from "../../../../Utils/ErrorModal/ErrorModal";
import ButtonWithIconSubmit from "../../../../Utils/Buttons/ButtonWithIcon/ButtonWithIconSubmit";

const SignUpContent = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        const user = await dataHandler.addNewUser(data);
        setIsLoading(false);
        if (!user) {
            setIsError(true);
            return;
        }
        navigate('/login');
    }

    const contentClasses = `signUpContent ${isLoading ? "hidden" : ""}`;

    return (
        <div className="boxSigneUp">
            {isLoading ? <Spinner/> : null}
            <div className={contentClasses}>
                {isError ? <ErrorModal text="Niewłaściwe dane"/> : null}
                <h2 className="headerSigneUp">Zarejestruj się</h2>
                <form>
                    <input className="h2SigneUp" type="text" name="firstName" placeholder="Imię"></input>
                    <br/>
                    <input className="h2SigneUp" type="text" name="lastName" placeholder="Nazwisko"></input>
                    <br/>
                    <input className="h2SigneUp" type="email" name="email" placeholder="Email"></input>
                    <br/>
                    <input className="h2SigneUp" type="password" name="password" placeholder="Hasło"></input>
                    <br/>
                    <input className="h2SigneUp" type="password" name="repeatPassword" placeholder="Powtórz hasło"></input>
                    <br/>
                    <input className="h2SigneUp" type="hidden" name="cityId" value="0"></input>
                    <br/>
                    <ButtonWithIconSubmit onClick ={onSubmitClick}></ButtonWithIconSubmit>
                </form>
            </div>
        </div>
    )
}


export default SignUpContent;
