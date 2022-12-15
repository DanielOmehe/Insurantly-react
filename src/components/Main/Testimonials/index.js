import React from "react";
import Container from "./container";
import style from './testimonials.module.css';
import user1 from '../../../images/user1.png';
import user2 from '../../../images/user2.png';

const Testimonials = () => {
    return(
        <section className={style.testimonials}>
            <Container images={[user1, user2]} />
        </section>
    )
}

export default Testimonials