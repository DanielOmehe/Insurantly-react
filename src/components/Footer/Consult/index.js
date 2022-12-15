import React from "react";
// import style from './consult.module.css'

const Content = ({children, variant}) =>  {
    return(
        <div className={variant} >
            {children}
        </div>
    )
}

export default Content