import {useState} from "react";
import LogInSignUpModal from "../LogInSignUpModal/LogInSignUpModal";
import ModalButton from "../Buttons/ModalButton/ModalButton";

const MiddleSection = props => {

	const [isModal, setIsModal] = useState(false);

	return (
		<div>
			<p>Wszystko dla twojego</p>
			<p>psy psyjaciela (to muszę zrozumieć)</p>
			<p>Od prawdziwych psyjaciół!</p>
			<ModalButton onClick={() => setIsModal(true)} text="Masz już konto zaloguj się"/>
			<ModalButton onClick={() => setIsModal(true)} text="Zarejestruj się"/>
			{isModal ? <LogInSignUpModal onClose={() => setIsModal(false)}/> : null}
		</div>
	);
}

export default MiddleSection;