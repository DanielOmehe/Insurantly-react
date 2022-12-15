import React from "react";
import Text from "../../Text";
import style from './Footerlink.module.css'
import Links from "./Links";

const Footerlinks = ( {details} ) => {
    return(
        <div className={style.linksContainer}>
            {
                details.map((detail, id) => {
                    const {header, links} = detail
                    return(
                        <div key={id} className={style.links}>
                            <Text variant={style.header}>{header}</Text>
                            <ul className={style.listItems}>
                                <Links links={links}/>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Footerlinks