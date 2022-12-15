import React from 'react'

const Input = ({type, variant, text}) => {
    return <input type={type} className={variant} placeholder={text} />
}

export default Input