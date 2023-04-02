import React, {useState} from 'react';
import './Navbar.css';
import MainColorButton from "../Utils/Buttons/MainColorButton/MainColorButton";
import {useNavigate} from "react-router-dom";

const NavBar = (props) => {
	const [isAdmin, setIsAdmin] = useState(false);
	const [IsSignUp, setIsSignUp] = useState(false);
	const navigate = useNavigate();
	const navigateToAbout = () => {navigate('/about');}
	const navigateToProfile = () => {navigate('/about');}
	const navigateToProvinces = () => {navigate('/provinces');}
	const navigateToVoivodeships = () => {navigate('/voivodeships');}
	const navigateToCities = () => {navigate('/cities');}
	const navigateToAnimalTypes = () => {navigate('/animal-types');}
	const navigateToBreeds = () => {navigate('/breeds');}
	const navigateToTrainingType = () => {navigate('/training-types');}
	const navigateToTrainingLevel = () => {navigate('/training-levels');}
	const navigateToTrainingStep = () => {navigate('/training-steps');}
	const navigateToTimeUnits = () => {navigate('/time-units');}
	const navigateToUserTypes = () => {navigate('/user-types');}
	const navigateToLogout = () => {navigate('/');}


	const navBarClasses = `NavBar ${isAdmin ? "NavBar" : "NoTop"}`;

	return (
		<div className={navBarClasses}>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(false);navigateToAbout()}} text="O nas"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(false);navigateToProfile()}} text="Mój profil"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(true);navigateToVoivodeships()}} text="Województwa"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(true);navigateToProvinces()}} text="Powiaty"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(true);navigateToCities()}} text="Miasta"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(true);navigateToAnimalTypes()}} text="Typy Zwierzaków"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(true);navigateToBreeds()}} text="Rasy"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(true);navigateToTrainingType()}} text="Lekcje"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(true);navigateToTrainingLevel()}} text="Poziom Trudności"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(true);navigateToTrainingStep()}} text="Kroki"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(true);navigateToTimeUnits()}} text="Typy jednostek miary"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(true);navigateToUserTypes()}} text="Typ użytkownika"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(false);navigateToLogout()}} text="Wyloguj się"/>
		</div>

	);
};

export default NavBar;
