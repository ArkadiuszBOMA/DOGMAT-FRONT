import "./LogInSignUpModal.css"
import SignUpContent from "./SignUpContent/SignUpContent";
import LogInContent from "./LogInContent/LogInContent";

const LogInSignUpModal = props => {

    return (
        <>
            <di>
                <span onClick={props.onClose} className="close">&times;</span>
                {props.isSignUp ? <SignUpContent/> : <LogInContent/>}
            </di>
        </>
    )
}


export default LogInSignUpModal;
