import React from "react";
import style from './navigation.module.css'

const Navigation = ({children}) => {
    return(
        <div className={style.navigation}>
            <div className={style.container}>
                <div className={style.row}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Navigation