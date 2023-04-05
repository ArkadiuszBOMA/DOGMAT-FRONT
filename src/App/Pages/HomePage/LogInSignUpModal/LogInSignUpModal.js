import "./LogInSignUpModal.css"
import SignUpContent from "./SignUpContent/SignUpContent";
import LogInContent from "./LogInContent/LogInContent";

const LogInSignUpModal = props => {

    return (
        <div className="modal">
            <div className="modal-content">
                <span onClick={props.onClose} className="close">&times;</span>
                {props.isSignUp ? <SignUpContent/> : <LogInContent/>}
            </div>
        </div>
    )
}


export default LogInSignUpModal;
