import React, {useState} from 'react';
import './Navbar.css';
import MainColorButton from "../Utils/Buttons/MainColorButton/MainColorButton";
import {useNavigate} from "react-router-dom";

const NavBar = (props) => {
	const [isAdmin, setIsAdmin] = useState(false);
	const [IsSignUp, setIsSignUp] = useState(false);
	const navigate = useNavigate();
	const navigateToAbout = () => {navigate('/about');}
	const navigateToProfile = () => {navigate('/profile');}
	const navigateToProvinces = () => {navigate('/provinces');}
	const navigateToVoivodeships = () => {navigate('/voivodeships');}
	const navigateToCities = () => {navigate('/Cities');}
	const navigateToAnimalType = () => {navigate('/animal-type');}
	const navigateToLogout = () => {navigate('/');}


	const navBarClasses = `NavBar ${isAdmin ? "NavBar" : "NoTop"}`;

	return (
		<div className={navBarClasses}>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(false);navigateToAbout()}} text="O nas"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(false);navigateToProfile()}} text="Mój profil"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(true);navigateToVoivodeships()}} text="Województwa"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(true);navigateToProvinces()}} text="Powiaty"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(true);navigateToCities()}} text="Miasta"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(true);navigateToAnimalType()}} text="Typy Zwierzaków"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(false);navigateToLogout()}} text="Wyloguj się"/>
		</div>

	);
};

export default NavBar;
