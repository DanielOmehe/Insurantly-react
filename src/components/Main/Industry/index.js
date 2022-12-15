import React from "react";
import Button from '../../Button'
import Text from "../../Text";
import style from './industry.module.css'
import Card from './Card.js'


const Industry = ({ images }) => {
    return(
        <section className={style.industry}>
            <div className={style.titleText}>
                <Text variant={style.heading} > We Are Optimists Who Love To Work Together </Text>
                <Text variant={style.subHeading} > Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics  </Text>
            </div>

            <div className={style.products}>
                {
                    images.map((image, id) => {
                        return(
                            <Card variant={style.card} key={id} >
                                <img className={style.background} src={image} alt='background' />
                                <div className={style.textDetails}>
                                    <Text variant={style.title}>Tax Reduction</Text>
                                    <Text variant={style.subTitle}>Life Tips From Top Ten Adventure Travelers</Text>
                                    <Button variant={style.button} >View Project</Button>
                                </div>
                            </Card>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Industry