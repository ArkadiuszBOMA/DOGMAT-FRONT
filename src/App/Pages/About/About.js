import './About.css';
import NavBar from "../../NavBar/Navbar";
import videoMain from "../../../assets/video/bac1.mp4";

const About= props => {
	return (
		<div>
			<video className="video" src={videoMain} autoPlay loop muted />
			<NavBar/>
			<div className='mianDiv'>
			<h1>DogMate (sprint 3)</h1>
				<h3>Dbasz o swojego zwierzaka</h3>
				<h3>potrzebujesz pomocy</h3>
				<h3>Chciałbyś podnieś kwalifikacje swojego pupila</h3>
				<h3>Chcesz podzielić się swoim doświadczeniem</h3>
			<h1>Authors</h1>
				<h3>Iga</h3>
				<h3>Natalia</h3>
				<h3>Arkadiusz Bojara</h3>
				<h3>Dawid</h3>
				<h5> All members have joined CodeCool training program on April 24th 2022.
					<section>Creation date March 25th 2023 - 10 months of learning</section>
				</h5>
			</div>
		</div>
	);
}

export default About;