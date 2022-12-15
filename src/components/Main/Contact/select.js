import React from 'react'

const Select = ({variant, text}) => {
    return(
        <select className={variant} >
            <option defaultValue >{text}</option>
        </select>
    )
}

export default Select