
import './CheckedIcon.css'

const CheckedVideo = props => {

	return (
		<video className="video" src={props.src} autoPlay loop muted />
	)
}
export default CheckedVideo;
