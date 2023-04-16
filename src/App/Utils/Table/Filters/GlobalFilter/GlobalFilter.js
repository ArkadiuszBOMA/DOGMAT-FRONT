import React, {useState }from 'react'
import "./GlobalFilter.css"
import {useAsyncDebounce} from "react-table";

export const GlobalFilter =({filter, setFilter}) => {
	const [value, setValue] = useState(filter)

	const onChange = useAsyncDebounce((value) => {
		setFilter(value || undefined)
	},1000)

	return(
		<span>
			<label className="text">
				Znajdź: {' '}
				<input value={value || ''}
					   onChange={(e)=> {
						   setValue(e.target.value)
						   onChange(e.target.value)
				}}/>
			</label>
		</span>
	)
}