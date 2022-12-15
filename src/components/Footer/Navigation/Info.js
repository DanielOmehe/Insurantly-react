import React from "react";
import Text from "../../Text";
import style from './info.module.css'

const Info = ( {contents} ) => {
    return(
        <React.Fragment>
            {
                contents.map((content, id) => {
                    const {icon, text} = content
                    return(
                        <li key={id} className={style.item} >
                            <img className={style.icon} src={icon} alt='icon' />
                            <Text variant={style.text}>{text}</Text>
                        </li>
                    )
                })
            }
        </React.Fragment>
    )
}

export default Info