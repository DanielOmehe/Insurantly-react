import React from 'react'

const Form = ({ children, variant }) => {
    return(
        <form className={variant}>
            {children}
        </form>
    )
}

export default Form