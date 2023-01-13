import { useState } from 'react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Intro from './components/Intro'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import FindUs from './components/FindUs'
import Chef from './components/Chef'
import AboutUs from './components/AboutUs'
import Awards from './components/Awards'

function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <Menu />
            <Chef />
            <Intro />
            <Awards />
            <Gallery />
            <FindUs />
            <Footer />
        </div>
    )
}

export default App
