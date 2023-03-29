import {useEffect, useState} from "react";
import LogInSignUpModal from "../LogInSignUpModal/LogInSignUpModal";
import ModalButton from "../../../Utils/Buttons/ModalButton/ModalButton";
import "./MiddleSection.css"

const MiddleSection = props => {

	const [isModal, setIsModal] = useState(false);
	const [isSignUp, setIsSignUp] = useState(false);

	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [text, setText] = useState('');
	const [, setIndex] = useState(1);
	const toRotate = [ "przy", "psyjaciela" ];
	const period = 1000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => { clearInterval(ticker) };
	}, [text])

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta(prevDelta => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex(prevIndex => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex(prevIndex => prevIndex + 1);
		}
	}


	return (
		<div className="middleSection">
			<span className="tagline"><p>Wszystko dla twojego</p>
				<h1>
					<span className="txt-rotate"  data-rotate='[ "przy", "psyjaciela" ]'>
						<span className="wrap">{text}</span>
					</span>
				</h1>
				<p>od prawdziwych psyjaciół!</p>
				<ModalButton onClick={() => {setIsModal(true); setIsSignUp(false)}} text="Masz już konto zaloguj się"/>
				<ModalButton onClick={() => {setIsModal(true); setIsSignUp(true)}}  text="Zarejestruj się"/>
				{isModal ? <LogInSignUpModal isSignUp={isSignUp} onClose={() => setIsModal(false)}/> : null}
			</span>
		</div>
	);
}

export default MiddleSection;