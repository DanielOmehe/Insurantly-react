import React from "react";
import style from './navlinks.module.css';

const NavLinks = ( {links} ) => {
    return(
        <React.Fragment>
            {
                links.map((link, id) => {

                    const { url, text } = link
                    return(
                        <li className={style.listItem} key={id} >
                            <a href={url} className={style.navLink} >
                                {text}
                            </a>
                        </li>
                    )
                })
            }
        </React.Fragment>
    )
}

export default NavLinks