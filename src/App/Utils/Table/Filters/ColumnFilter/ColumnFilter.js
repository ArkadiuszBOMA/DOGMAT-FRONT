import React from 'react'
import "./ColumnFilter.css"

export const ColumnFilter =({ column }) =>{
	const {filterValue, setFilter} = column
	return(
		<label className="filterColumnBox">
			Znajdź: {''}
			<input className="filterColumnText" value={filterValue || ''} onChange={(e)=> setFilter(e.target.value)}/>
		</label>
	)
}