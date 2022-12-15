import React from "react";
import style from './card.module.css'
import Text from "../../Text";

const Card = ( { icon, heading, subHeading, text } ) => {
    return(
        <div className={style.card}>
            <img src={icon} alt={text} />
            <Text variant={style.heading}>{heading}</Text>
            <Text variant={style.subHeading}>{subHeading}</Text>
        </div>
    )
}

export default Card