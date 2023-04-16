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
	const navigateToUserRole = () => {navigate('/user-roles');}
	const navigateToLogout = () => {navigate('/');}


	const navBarClasses = `NavBar ${isAdmin ? "NavBar" : "NoTop"}`;

	const lista= [
		{onClick:() => {setIsSignUp(false);navigateToAbout()}, text:"O nas", id:"0"},
		{onClick:() => {setIsSignUp(false);navigateToProfile()}, text:"Mój profil", id:"1"},
		{onClick:() => {setIsSignUp(false);navigateToAnimalTypes()}, text:"Typy Zwierzaków", id:"2"},
		{onClick:() => {setIsSignUp(false);navigateToBreeds()}, text:"Rasy", id:"3"},
		{onClick:() => {setIsSignUp(false);navigateToVoivodeships()}, text:"Województwa", id:"4"},
		{onClick:() => {setIsSignUp(false);navigateToProvinces()}, text:"Powiaty", id:"5"},
		{onClick:() => {setIsSignUp(false);navigateToCities()}, text:"Miasta", id:"6"},
		{onClick:() => {setIsSignUp(false);navigateToTrainingType()}, text:"Lekcje", id:"7"},
		{onClick:() => {setIsSignUp(false);navigateToTrainingLevel()}, text:"Poziom Trudności", id:"8"},
		{onClick:() => {setIsSignUp(false);navigateToTrainingStep()}, text:"Kroki", id:"9"},
		{onClick:() => {setIsSignUp(false);navigateToTimeUnits()}, text:"Jednostki miary", id:"10"},
		{onClick:() => {setIsSignUp(false);navigateToUserTypes()}, text:"Typ użytkownika", id:"11"},
		{onClick:() => {setIsSignUp(false);navigateToUserRole()}, text:"Role użytkownika", id:"12"},
		{onClick:() => {setIsSignUp(false);navigateToLogout()}, text:"Wyloguj się", id:"13"},

	]

	return (
		<div className={navBarClasses}>
			{lista.map(item => <MainColorButton key={item.id} className = "nav-links" onClick={item.onClick} text={item.text}/>)}
		</div>

	);
};

export default NavBar;
