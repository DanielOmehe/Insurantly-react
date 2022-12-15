import React from "react";
import style from './column.module.css'
import Card from "./card";

const Column = ( {contents} ) => {
    return(
        <div className={style.column} >
            <div className={style.cards} >
                {
                    contents.map((content, id) => {
                        const { icon, heading, subHeading, text } = content
                        return(
                            <React.Fragment>
                                <Card 
                                    key={id}
                                    icon={icon}
                                    heading={heading}
                                    subHeading={subHeading}
                                    text={text}
                                />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Column