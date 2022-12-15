import React from "react";
import style from './navicons.module.css'

const NavIcons = ({icons}) => {
    return(
        <div className={style.navIcons}>
            {
                icons.map((image, id)=> {
                    return <img 
                    key={id}
                    src={image} alt='icon' />
                })
            }
        </div>
    )
}

export default NavIcons