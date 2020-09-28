import React, { Component } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Newsletter from './components/Newsletter'
import Preloader from './components/Preloader'
import Products from './components/Products'
import StyleSwitcher from './components/StyleSwitcher'
import Testinomial from './components/Testinomial'

export default class App extends Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}
