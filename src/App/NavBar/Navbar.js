import React, {useState, useEffect, useCallback} from 'react';
import './Navbar.css';
import MainColorButton from "../Utils/Buttons/MainColorButton/MainColorButton";
import {useNavigate} from "react-router-dom";

const NavBar = (props) => {
	const [isAdmin, setIsAdmin] = useState(false);
	const [IsSignUp, setIsSignUp] = useState(false);
	const navigate = useNavigate();
	const navigateToAbout = () => {navigate('/about');}
	const navigateToProfile = () => {navigate('/profile');}
	const navigateToAdmin = () => {navigate('/admin');}
	const navigateToLogout = () => {navigate('/');}


	const navBarClasses = `NavBar ${isAdmin ? "NavBar" : "NoTop"}`;

	return (
		<div className={navBarClasses}>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(false);navigateToAbout()}} text="O nas"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(false);navigateToProfile()}} text="Mój profil"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(true);navigateToAdmin()}} text="Administracja"/>
			<MainColorButton className = "nav-links" onClick={() => {setIsSignUp(false);navigateToLogout()}} text="Wyloguj się"/>
		</div>

	);
};

export default NavBar;
