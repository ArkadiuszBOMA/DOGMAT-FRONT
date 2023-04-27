import {format} from "date-fns"

export const COLUMNS = [
	{
		Header: 'ID',
		Footer: 'ID',
		accessor: 'id',
		isEditable: false,
		disableFilters: true
	},
	{
		Header: 'Imię',
		Footer: 'Imię',
		accessor: 'first_name',
		isEditable: false,
	},
	{
		Header: 'Nazwisko',
		Footer: 'Nazwisko',
		accessor: 'last_name',
		isEditable: false,
	},
	{
		Header: 'Email',
		Footer: 'Email',
		accessor: 'email',
		isEditable: false,
	},
	{
		Header: 'Daty',
		Footer: 'Daty',
		columns:
			[
				{
					Header: 'Utworzono',
					Footer: 'Utworzono',
					accessor: 'date_create',
					isEditable: false,
					Cell: ({ value }) => {return value !== null ? format(new Date(value), 'dd-MM-yyyy') : " "},
				},
				{
					Header: 'Modyfikowano',
					Footer: 'Modyfikowano',
					accessor: 'date_modify',
					isEditable: false,
					Cell: ({ value }) => {return value !== null ? format(new Date(value), 'dd-MM-yyyy') : " "},
				},
				{
					Header: 'Zarchiwizowano',
					Footer: 'Zarchiwizowano',
					accessor: 'date_archive',
					isEditable: false,
					Cell: ({ value }) => {return value !== null ? format(new Date(value), 'dd-MM-yyyy') : " "},
				}
			]
	},
	{
		id:'archive',
		Header: 'Czy w archiwum?',
		Footer: 'Czy w archiwum?',
		isEditable: false,
		accessor: d => { return d.archive ? 'Tak' : 'Nie' },
	},
]