import React from 'react'
import Footer from './Footer'
import Header from './Header/index'
import Main from './Main/index'
import './App.css'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'

const App = () => {
    return(
        <React.Fragment>
            <Header />
            <Main />
            <Footer icons={[facebook, instagram, twitter]} />
        </React.Fragment>
    )
}

export default App