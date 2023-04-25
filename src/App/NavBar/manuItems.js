export const manuItems = [
	{
		title: 'O nas',
		url: '/about',
		role: ["*"],
	},
	{
		title: 'Mój profil',
		role: ["USER"],
		submenu: [
			{
				title: 'Dane osobowe',
				url:'/time-units'
			},
			{
				title: 'Moje zwierzaki',
				url:'/time-units'
			},
			{
				title: 'Moje treningi',
				url:'/time-units'
			},
			]
	},
	{
		title: 'Opieka',
		role: ["ADMIN"],
		url: '/care-announcement'
	},
	{
		title: 'Trening',
		role: ["TRENER"],
		submenu: [
			{
				title: 'Rodzaje treningów',
				url: '/training-types'
			},
			{
				title: 'Poziomy trudności',
				url: '/training-levels'
			},
			{
				title: 'Kroki treningów',
				url: '/training-steps'
			},
			{
				title: 'Jednostki treningowe',
				url:'/time-units'
			}
		]
	},
	{
		title: 'Zwierzęta',
		role: ["DOKTOR"],
		submenu: [
			{
				title: 'Rodzaje zwierząt',
				url: '/animal-types'
			},
			{
				title: 'Rasy',
				url: '/breeds'
			},
		]
	},
	{
		title: 'Geografia',
		role: ["ADMIN"],
		submenu: [
			{
				title: 'Województwa',
				url: '/voivodeships'
			},
			{
				title: 'Powiaty',
				url: '/provinces'
			},
			{
				title: 'Miasta',
				url: '/cities'
			}
			]
	},
	{
		title: 'Użytkownicy',
		role: ["ADMIN"],
		submenu: [
			{
				title: 'Role',
				url:'/user-roles'
			},
			{
				title: 'Przywileje',
				url: '/user-privilege'
			},
			{
				title: 'Użytkownicy',
				url: '/user'
			}
		]
	},
	{
		title: 'Wyloguj',
		role: ["ADMIN"],
		url: '/'
	}
	];