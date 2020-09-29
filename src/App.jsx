import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
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
import Error from './components/Error'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Preloader />
        <Switch className='p-0'>
          <Route exact path='/'>
            <React.Fragment>
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
          </Route>
          <Route>
            <Header />
            <Error />
            <Footer />
          </Route>
        </Switch>
      </React.Fragment>
    )
  }
}
