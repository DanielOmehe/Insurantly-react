import React from "react";

const Button = ( {children, variant} ) => {
    return <button className={variant} > {children} </button>
}

export default Button