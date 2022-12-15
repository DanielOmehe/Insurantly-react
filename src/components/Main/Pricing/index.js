import React from "react";
import style from './pricing.module.css'
import Text from '../../Text'
import Card from '../Industry/Card'
import Button from "../../Button";
import Feature from "./Feature";


const Pricing = ( { details, features } ) => {
    return(
        <section className={style.pricing}>
            <div className={style.container}>
                <div className={style.title} >
                    <Text variant={style.heading} > Pricing </Text>
                    <Text variant={style.subHeading} > Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics  </Text>
                </div>

                <div className={style.pricingCardBox}>
                    {
                        details.map((detail, id) => {
                            const { category, price } = detail
                            return(
                                <Card key={id} variant={style.pricingCard}>
                                    <Text variant={style.header}>{category}</Text>
                                    <Text variant={style.subHeader}>Organize across all apps by hand</Text>
                                    <div className={style.priceBox} >
                                        <Text variant={style.price}>{price}</Text>
                                        <Text variant={style.rate}>per month</Text>
                                    </div>
                                    <Button variant={style.button}>Try for free</Button>
                                    <div className={style.features} >
                                        {
                                            features.map((feature, id) => {
                                                const {text, icon} = feature
                                                return(
                                                    <Feature 
                                                    key={id} variant={style.feature}>
                                                        <img  src={icon} alt='icon' />
                                                        <Text variant={style.text}>{text}</Text>
                                                    </Feature>
                                                )
                                            })
                                        }
                                    </div>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Pricing