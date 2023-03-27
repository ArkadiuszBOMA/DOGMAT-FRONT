import './LogInContent.css'
import {dataHandler} from "../../../Api/dataHandler";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ErrorModal from "../ErrorModal/ErrorModal";
import Spinner from "../../../Spinners/Spinner";
import {authenticate} from "../../../Authenticate/authenticate";

const LogInContent = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        const user = await dataHandler.logginAppUser(data);
        setIsLoading(false);
        if (!user) {
            setIsError(true);
            return;
        }
        navigate('/dashboard');
        authenticate.loginUser(user.id, user.username);
    }

    const contentClasses = `logInContent ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentClasses}>
                {isError ? <ErrorModal text="Niepoprawne dane !"/> : null}
                    <form className="login" onSubmit={onSubmitClick}>
                        <h2 className="text">Psyjacielu zaloguj się</h2>
                        <input className="" type="text" name="email" placeholder="Email"></input>
                        <input className="" type="password" name="password" placeholder="Password"></input>
                        <button className="button" type="submit">Submit</button>
                    </form>
            </div>
        </div>
    )
}


export default LogInContent;
