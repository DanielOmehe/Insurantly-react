import React from "react";
import Title from "../../Title";
import style from './container.module.css'
import Testimony from "./Testimony";

const Container = ( { images } ) => {
    return(
        <div className={style.container}>
            <div className={style.title} >
                <Title className={style.heading}>What Clients Say</Title>
                <Title className={style.subHeading}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</Title> 
            </div>
            <div className={style.testimonies}>
                {
                    images.map((image, id) => {
                        return(
                            <Testimony key={id} image={image} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Container