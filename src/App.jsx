import React, { Component } from 'react'
import {
  About,
  Contact,
  Faq,
  Features,
  Footer,
  Header,
  Home,
  Newsletter,
  Preloader,
  Products,
  StyleSwitcher,
  Testinomial,
} from './components/'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Preloader />
        <Header />
        <Home />
        <About />
        <Features />
        <Products />
        <Testinomial />
        <Faq />
        <Newsletter />
        <Contact />
        <Footer />
        <StyleSwitcher />
      </React.Fragment>
    )
  }
}
