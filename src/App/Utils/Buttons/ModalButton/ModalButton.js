import './ModalButton.css'

const ModalButton = props => {

    return (
        <button className="filterGlobalBox" onClick={props.onClick}>{props.text}</button>
    )
}
export default ModalButton;
