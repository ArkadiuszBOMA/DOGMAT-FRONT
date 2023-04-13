import React from 'react'
import "./ColumnFilter.css"

export const ColumnFilter =({ column }) =>{
	const {filterValue, setFilter} = column
	return(
		<label className="text">
			Znajdź: {''}
			<input value={filterValue || ''} onChange={(e)=> setFilter(e.target.value)}/>
		</label>
	)
}