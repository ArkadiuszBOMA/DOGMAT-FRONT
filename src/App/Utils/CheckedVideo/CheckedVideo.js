import "./CheckedVideo.css"
const CheckedVideo = props => {

	return (<video className="pageVideo" src={props.src} autoPlay loop muted />)
}
export default CheckedVideo;
