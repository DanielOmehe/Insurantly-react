import React from "react";
import Button from "../Button";
import Text from "../Text";
import style from './container.module.css'

const Container = () => {
    return(
        <div className={style.container}>
            <div className={style.containerRow}>
                <div className={style.row1}>
                    <Text variant={style.textHeader}>We Ensure A Best Insurance Service</Text>
                    <Text variant={style.textSubHeading}>We know how large objects will act, but things on a small scale.</Text>
                    <div className={style.buttons}>
                        <Button variant={style.getNow}>Get quote now</Button>
                        <Button variant={style.learnMore}>Learn more</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container