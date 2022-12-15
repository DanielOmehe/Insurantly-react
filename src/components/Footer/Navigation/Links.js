import React from "react";
import style from './links.module.css'

const Links = ({links}) => {
    return(
        <React.Fragment>
            {
                links.map((link, id ) => {
                    return(
                        <li key={id} className={style.listItem} >
                            <a href="www.insurantly.com">{link}</a>
                        </li>
                    )
                })
            }
        </React.Fragment>
    )
}

export default Links