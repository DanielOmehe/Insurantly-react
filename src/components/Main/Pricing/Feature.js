import React from 'react'


const Feature = ({ children, variant }) => {
    return(
        <div className={variant}>
            {children}
        </div>
    )
}

export default Feature