import React from "react";
import style from './main.module.css'
import Features from "./Features";
import Testimonials from "./Testimonials/index";
import Industry from "./Industry";
import post1 from '../../images/post1.jpg'
import post2 from '../../images/post2.jpg'
import post3 from '../../images/post3.jpg'
import post4 from '../../images/post4.jpg'
import Pricing from "./Pricing";
import check from '../../images/check-green.svg'
import ashCheck from '../../images/check-grey.svg'
import Contact from "./Contact";

const Main = () => {
    return(
        <main className={style.content}>
            <Features />
            <Testimonials />
            <Industry images={[post1, post2, post3, post4]} />
            <Pricing details={[
                {
                    category: 'FREE',
                    price: `${0}$`
                },
                {
                    category: 'Silver',
                    price: `${9.99}$`
                },
                {
                    category: 'GOLD',
                    price: `${19.99}$`
                },
            ]}
            features={[
                {
                    text: 'Unlimited product updates',
                    icon: check
                },
                {
                    text: 'Unlimited product updates',
                    icon: check
                },
                {
                    text: 'Unlimited product updates',
                    icon: check
                },
                {
                    text: '1GB  Cloud storage',
                    icon: ashCheck
                },
                {
                    text: 'Email and community support',
                    icon: ashCheck
                },
            ]} />
            <Contact />
        </main>
    )
}

export default Main