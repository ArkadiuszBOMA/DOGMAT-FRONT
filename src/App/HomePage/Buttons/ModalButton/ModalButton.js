import './ModalButton.css'

const ModalButton = props => {

    return (
        <button className="modalButton" onClick={props.onClick}>{props.text}</button>
    )
}
export default ModalButton;
