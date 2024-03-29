import React from 'react'
import "./CheckBox.css"

export const CheckBox = React.forwardRef(({ indeterminate, ...rest }, ref) =>{
	const defaultRef = React.useRef()
	const resolvedRef = ref || defaultRef

	React.useEffect(() => {
		resolvedRef.current.indeterminate = indeterminate
	},[resolvedRef, indeterminate])

	return(
		<div>
			<input className="inputCheckBox" type='checkbox' ref={resolvedRef} {...rest}/>
		</div>
	)
})