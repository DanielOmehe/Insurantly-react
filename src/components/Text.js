import React from "react";

const Text = ( {children, variant} ) => {
    return <h2 className={variant} > {children} </h2>
}

export default Text