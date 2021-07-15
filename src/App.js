import React from 'react'
//Global Style
import GlobalStyle from './components/GlobalStyle'
//Import Pages
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import Nav from './components/Nav'

//Router
import { Switch, Route, useLocation } from 'react-router-dom'
//Animation
import { AnimatePresence } from 'framer-motion'

function App() {
    const location = useLocation()

    return (
        <div className="App">
            <GlobalStyle />

            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                        <AboutUs />
                    </Route>
                    <Route path="/work" exact>
                        <OurWork />
                    </Route>
                </Switch>
            </AnimatePresence>
            <ContactUs />
        </div>
    )
}

export default App