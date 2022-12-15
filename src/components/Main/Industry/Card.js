import React from "react";

const Card = ({ children, variant }) => {
    return(
        <div className={variant}>
            {children}
        </div>
    )
}

export default Card