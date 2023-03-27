import './LogInSignUpModal.css'
import {useState} from "react";
import SignUpContent from "./SignUpContent/SignUpContent";
import LogInContent from "./LogInContent/LogInContent";

const LogInSignUpModal = props => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="modal">
            <div className="modal-content">
                <span onClick={props.onClose} className="close">&times;</span>
                {isSignUp ? <SignUpContent/> : <LogInContent/>}
            </div>
        </div>
    )
}


export default LogInSignUpModal;
