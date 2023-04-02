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
		Header: 'Lekcja',
		Footer: 'Lekcja',
		isEditable: false,
		accessor: 'name'
	},
	{
		Header: 'Poziom trudności',
		Footer: 'Poziom trudności',
		isEditable: false,
		accessor: 'trainingLevel'
	},
	{
		Header: 'Opis',
		Footer: 'Opis',
		isEditable: false,
		accessor: 'description'
	},
	{
		Header: 'Obraz',
		Footer: 'Obraz',
		isEditable: false,
		accessor: 'imageLocation'
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
					Cell: ({ value }) => {return format(new Date(value), 'dd-MM-yyyy')}
				},
				{
					Header: 'Modyfikacji',
					Footer: 'Modyfikacji',
					accessor: 'date_modify',
					isEditable: false,
					Cell: ({ value }) => {return format(new Date(value), 'dd-MM-yyyy')}
				},
				{
					Header: 'Archiwizacji',
					Footer: 'Archiwizacji',
					accessor: 'date_archive',
					isEditable: false,
					Cell: ({ value }) => {return format(new Date(value), 'dd-MM-yyyy')}

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