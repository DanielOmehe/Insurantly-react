import React from "react";
import Button from "../Button";
import Text from "../Text";
import Content from "./Consult";
import style from './footer.module.css'
import Navigation from "./Navigation";
import Footerlinks from "./Navigation/FooterLinks";
import Info from "./Navigation/Info";
import Icon from "./Social/icon";
import phone from '../../images/phone.svg'
import map from '../../images/map.svg'
import mail from '../../images/mail.svg'

const Footer = ({icons}) => {
    return(
        <footer className={style.footer}>
            <Content variant={style.consult}>
                <div className={style.container}>
                    <div className={style.title}>
                        <Text variant={style.heading}>Consulting Agency For Your Business</Text>
                        <Text variant={style.subHeading}>the quick fox jumps over the lazy dog</Text>
                    </div>
                    <Button variant={style.button}>Contact Us</Button>
                </div>
            </Content>
            <Navigation>
                <Footerlinks details={[
                    {
                        header: 'Company Info',
                        links: [
                            'About Us',
                            'Carrier',
                            'We are Hiring',
                            'Blog'
                        ]
                    },
                    {
                        header: 'Legal',
                        links: [
                            'About Us',
                            'Carrier',
                            'We are Hiring',
                            'Blog'
                        ]
                    },
                    {
                        header: 'Features',
                        links: [
                            'Business Marketing',
                            'User Analytic',
                            'Live Chat',
                            'Unlimited Support'
                        ]
                    },
                    {
                        header: 'Resources',
                        links: [
                            'IOS & Android',
                            'Watch a Demo',
                            'Customers',
                            'API'
                        ]
                    },
                ]} />
                <div className={style.info}>
                     <Text variant={style.header}>Get in touch</Text>
                     <ul>
                        <Info contents={[
                            { icon: phone, text: '(480) 555-0103'  },
                            { icon: map, text: '4517 Washington Ave.'},
                            { icon: mail, text: 'debra.holt@example.com'}
                        ]} />
                     </ul>
                </div>
            </Navigation>
            <Content variant={style.social}>
                <div className={style.container}>
                    <Text variant={style.intro}>Made With Love By Figmaland All Right Reserved </Text>
                    <div className={style.icons}>
                        {
                            icons.map((icon, id) => {
                                return(
                                    <Icon key={id}>
                                        <img src={icon} alt='icon' />
                                    </Icon>
                                )
                            })
                        }
                    </div>
                </div>
            </Content>
        </footer>
    )
}

export default Footer