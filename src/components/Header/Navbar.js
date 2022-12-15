import React from "react";
import style from './navbar.module.css';
import Text from '../Text';
import NavLinks from "./NavLinks";
import Register from "./Register";
import arrow from '../../images/arrow.svg'
import Button from "../Button";
import NavIcons from "./NavIcons";
import search from '../../images/search.svg'
import cart from '../../images/cart.svg'
import menu from '../../images/menu.svg'


const NavBar = () => {
    return(
        <nav className={style.navBar}>
            <div className={style.logo}>
                <Text variant={style.logoText}>Insurantly</Text>
            </div>
            <ul className={style.listItems}>
                <NavLinks links={[
                    {
                        url: 'www.insurantly.com',
                        text: 'Home'
                    },
                    {
                        url: 'www.insurantly.com',
                        text: 'Product'
                    },
                    {
                        url: 'www.insurantly.com',
                        text: 'Pricing'
                    },
                    {
                        url: 'www.insurantly.com',
                        text: 'Contact'
                    },
                ]} />
            </ul>
            <div className={style.register} >
               <Register>
                    <a className={style.login} href='www.insurantly.com'>Login</a>
                    <Button variant={style.regBtn}>
                        Become a member
                        <img src={arrow} alt='arrow' />
                    </Button>
               </Register> 
            </div>
            <NavIcons icons={[search, cart, menu]} />
        </nav>
    )
}

export default NavBar