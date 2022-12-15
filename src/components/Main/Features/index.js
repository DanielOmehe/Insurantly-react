import React from "react";
import style from './features.module.css';
import Column from "./column";
import book from '../../../images/book.svg'
import tag from '../../../images/tag.svg'
import user from '../../../images/user.svg'

const Features = () => {
    return(
        <section className={style.features}>
            <Column contents={[
                {
                    icon: book,
                    heading: 'Peace of mind',
                    subHeading: 'So it really behaves like neither. Now we have given up.',
                    text: 'book'
                },
                {
                    icon: tag,
                    heading: 'Set For Life',
                    subHeading: 'They were used to create the machines that launched ',
                    text: 'tag'
                },
                {
                    icon: user,
                    heading: '100% Satisfaction',
                    subHeading: 'So it really behaves like neither. Now we have given up.',
                    text: 'user'
                },
            ]} />
        </section>
    )
}

export default Features