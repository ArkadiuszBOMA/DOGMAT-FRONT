import '../Utils/Table/Filters/GlobalFilter/GlobalFilter.css'
import React from "react";
import * as FaIcons from 'react-icons/fa'
export const manuItems = [
	{
		title: 'O nas',
		url: '/about',
		icon: <FaIcons.FaBars />,
		cName:'filterGlobalText',
		role: ["*"],
	},
	{
		title: 'Mój profil',
		icon: <FaIcons.FaBars />,
		cName:'filterGlobalText',
		role: ["USER"],
		submenu: [
			{
				title: 'Dane osobowe',
				icon: <FaIcons.FaBars />,
				cName:'filterGlobalText',
				url:'/time-units'
			},
			{
				title: 'Moje zwierzaki',
				icon: <FaIcons.FaBars />,
				cName:'filterGlobalText',
				url:'/time-units'
			},
			{
				title: 'Moje treningi',
				icon: <FaIcons.FaBars />,
				cName:'filterGlobalText',
				url:'/time-units'
			},
			]
	},
	{
		title: 'Opieka',
		icon: <FaIcons.FaBars />,
		cName:'filterGlobalText',
		role: ["ADMIN"],
		url: '/care-announcement'
	},
	{
		title: 'Trening',
		icon: <FaIcons.FaBars />,
		cName:'filterGlobalText',
		role: ["TRENER"],
		submenu: [
			{
				title: 'Rodzaje treningów',
				icon: <FaIcons.FaBars />,
				cName:'filterGlobalText',
				url: '/training-types'
			},
			{
				title: 'Poziomy trudności',
				icon: <FaIcons.FaBars />,
				cName:'filterGlobalText',
				url: '/training-levels'
			},
			{
				title: 'Kroki treningów',
				icon: <FaIcons.FaBars />,
				cName:'filterGlobalText',
				url: '/training-steps'
			},
			{
				title: 'Jednostki treningowe',
				icon: <FaIcons.FaBars />,
				cName:'filterGlobalText',
				url:'/time-units'
			}
		]
	},
	{
		title: 'Zwierzęta',
		icon: <FaIcons.FaBars />,
		cName:'filterGlobalText',
		role: ["DOKTOR"],
		submenu: [
			{
				title: 'Rodzaje zwierząt',
				icon: <FaIcons.FaBars />,
				cName:'filterGlobalText',
				url: '/animal-types'
			},
			{
				title: 'Rasy',
				icon: <FaIcons.FaBars />,
				cName:'filterGlobalText',
				url: '/breeds'
			},
		]
	},
	{
		title: 'Geografia',
		icon: <FaIcons.FaBars />,
		cName:'filterGlobalText',
		role: ["ADMIN"],
		submenu: [
			{
				title: 'Województwa',
				icon: <FaIcons.FaBars />,
				cName:'filterGlobalText',
				url: '/voivodeships'
			},
			{
				title: 'Powiaty',
				icon: <FaIcons.FaBars />,
				cName:'filterGlobalText',
				url: '/provinces'
			},
			{
				title: 'Miasta',
				icon: <FaIcons.FaBars />,
				cName:'filterGlobalText',
				url: '/cities'
			}
			]
	},
	{
		title: 'Użytkownicy',
		role: ["ADMIN"],
		icon: <FaIcons.FaBars />,
		cName:'filterGlobalText',
		submenu: [
			{
				title: 'Role',
				icon: <FaIcons.FaBars />,
				cName:'filterGlobalText',
				url:'/user-roles'
			},
			{
				title: 'Przywileje',
				icon: <FaIcons.FaBars />,
				cName:'filterGlobalText',
				url: '/user-privilege'
			},
			{
				title: 'Użytkownicy',
				icon: <FaIcons.FaBars />,
				cName:'filterGlobalText',
				url: '/user'
			}
		]
	},
	{
		title: 'Wyloguj',
		icon: <FaIcons.FaBars />,
		cName:'filterGlobalText',
		role: ["ADMIN"],
		url: '/'
	}
	];