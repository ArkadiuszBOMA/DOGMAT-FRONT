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
		Header: 'TERYT ID',
		Footer: 'TERYT ID',
		isEditable: true,
		accessor: 'terytId'
	},
	{
		Header: 'Nazwa Powiatu',
		Footer: 'Nazwa Powiatu',
		accessor: 'name',
		isEditable: true,
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
	{
		Header: 'Województwo',
		Footer: 'Województwo',
		accessor: 'voivodeship',
		isEditable: true

	},
]