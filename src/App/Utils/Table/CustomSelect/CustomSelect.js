import React from "react";
import Select from "react-select";
import "./CustomSelect.css"



function CustomSelect(label, options, onChange, defaultValue ){
    return <div>
        <Select options={options} onChange={onChange} defaultValue={defaultValue}/>
    </div>
}

export default CustomSelect
