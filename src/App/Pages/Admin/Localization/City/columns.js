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
		Header: 'Nazwa Miasta',
		Footer: 'Nazwa Miasta',
		isEditable: false,
		accessor: 'name'

	},
	{
		Header: 'Powiat',
		Footer: 'Powiat',
		isEditable: false,
		accessor: 'province'

	},
	{
		Header: 'Województwo',
		Footer: 'Województwo',
		isEditable: false,
		accessor: 'voivodeship'

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