import React from 'react'
import Container from './Container'
import style from './header.module.css'
import NavBar from './Navbar'

const Header = () => {
    return (
        <header className={style.header}>
            <NavBar />
            <Container />
        </header>
    )
}

export default Header