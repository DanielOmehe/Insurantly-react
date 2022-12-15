import React from "react";
import style from './testimony.module.css'
import Text from '../../Text'
import star from '../../../images/star.svg'
import starAlt from '../../../images/star-alt.svg'

const Testimony = ({ image }) => {
    return(
        <div className={style.testimony}>
            <img className={style.clientImage} src={image} alt='user' />
            <Text variant={style.clientName}> Regina Myles </Text>
            <Text variant={style.client}> Designer </Text>
            <div className={style.stars}>
                <img src={star} className={style.star} alt='star' />
                <img src={star} className={style.star} alt='star' />
                <img src={star} className={style.star} alt='star' />
                <img src={star} className={style.star} alt='star' />
                <img src={starAlt} className={style.star} alt='star' />
            </div>
            <Text variant={style.clientSay}> This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. </Text>
        </div>
    )
}

export default Testimony