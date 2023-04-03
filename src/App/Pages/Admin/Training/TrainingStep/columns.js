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
		Header: 'Nazwa jednostki miary',
		Footer: 'Nazwa jednostki miary',
		accessor: 'name',
		isEditable: false,
	},
	{
		Header: 'Daty',
		Footer: 'Daty',
		columns:
		[
			{
				Header: 'Utworzenia',
				Footer: 'Utworzenia',
				accessor: 'date_create',
				isEditable: false,
				Cell: ({ value }) => {return value !== null ? format(new Date(value), 'dd-MM-yyyy') : " "},
			},
			{
				Header: 'Modyfikacji',
				Footer: 'Modyfikacji',
				accessor: 'date_modify',
				isEditable: false,
				Cell: ({ value }) => {return value !== null ? format(new Date(value), 'dd-MM-yyyy') : " "},
			},
			{
				Header: 'Archiwizacji',
				Footer: 'Archiwizacji',
				accessor: 'date_archive',
				isEditable: false,
				Cell: ({ value }) => {return value !== null ? format(new Date(value), 'dd-MM-yyyy') : " "},

			}
		]
	},
	{
		id:'archive',
		Header: 'Archiwizowane?',
		Footer: 'Archiwizowane?',
		isEditable: false,
		accessor: d => { return d.archive ? 'W archiwum' : 'Używane' },
	},
]