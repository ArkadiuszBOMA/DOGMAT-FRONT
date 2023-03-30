import {format} from "date-fns"
export const COLUMNS = [
	{
		Header: 'ID',
		Footer: 'ID',
		accessor: 'id',
		disableFilters: true
	},
	{
		Header: 'TERYT ID',
		Footer: 'TERYT ID',
		accessor: 'terytId'
	},
	{
		Header: 'Nazwa Województwa',
		Footer: 'Nazwa Województwa',
		accessor: 'name'
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
				Cell: ({ value }) => {return format(new Date(value), 'dd-MM-yyyy')}
			},
			{
				Header: 'Modyfikacji',
				Footer: 'Modyfikacji',
				accessor: 'date_modify',
				Cell: ({ value }) => {return format(new Date(value), 'dd-MM-yyyy')}
			},
			{
				Header: 'Archiwizacji',
				Footer: 'Archiwizacji',
				accessor: 'date_archive',
				Cell: ({ value }) => {return format(new Date(value), 'dd-MM-yyyy')}

			}
		]
	},
	{
		id:'archive',
		Header: 'Archiwizowane?',
		Footer: 'Archiwizowane?',
		accessor: d => { return d.archive ? 'W archiwum' : 'Używane' },
	},
]