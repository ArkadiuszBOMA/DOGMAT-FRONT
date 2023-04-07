import {format} from "date-fns"
export const COLUMNS = [
	{
		Header: 'ID',
		Footer: 'ID',
		accessor: 'id',
		isEditable: false,
		disableFilters: true,
	},
	{
		Header: 'Rasa',
		Footer: 'Rasa',
		isEditable: false,
		accessor: 'name',
	},
	{
		Header: 'Zwierzę',
		Footer: 'Zwierzę',
		isEditable: false,
		accessor: 'animalType',
	},
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

	},
	{
		id:'archive',
		Header: 'Archiwizowane?',
		Footer: 'Archiwizowane?',
		isEditable: false,
		accessor: d => { return d ? 'W archiwum' : 'Używane' },
	},
]