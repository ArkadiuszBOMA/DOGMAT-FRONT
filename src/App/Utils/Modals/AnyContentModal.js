import './AnyContentModal.css'

const AnyContentModal = props => {

	return (

		<div className="anyContentModal">
			<div className="anyContentModal-Content">
				<span onClick={props.onClose} className="close">&times;</span>
					{props.content}
			</div>
		</div>
	)
}


export default AnyContentModal;
