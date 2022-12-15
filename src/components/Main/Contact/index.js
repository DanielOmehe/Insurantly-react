import React from 'react'
import Text from '../../Text'
import style from './contact.module.css'
import Form from './Form'
import Input from './input'
import Select from './select'
import TextArea from './textarea'
import Button from '../../Button'

const Contact = () => {
    return(
        <section className={style.contact}>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.title}>
                        <Text variant={style.contactUs}>Contact Us</Text>
                        <Text variant={style.appoint}>Make an Appointment</Text>
                    </div>
                    <Form variant={style.contactForm}>
                        <div className={style.input}>
                            <Input type='text' variant={style.inputField} text='First name *' />
                            <Input type='email' variant={style.inputField} text='Email *' />
                        </div>
                        <div className={style.select} >
                            <Select variant={style.selectField} text='Please Select' />
                            <Select variant={style.selectField} text='4:00 Available' />
                        </div>
                        <TextArea variant={style.message} text='message' />
                        <Button variant={style.button}>Book Appointment</Button>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default Contact