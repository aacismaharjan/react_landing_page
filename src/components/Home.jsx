import React from 'react'
import showCaseImg from '../img/watch-01.png'
import Button from './Button'

export default function Home() {
  return (
    <section className='home-section' id='home'>
      <div className='bg-shapes'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='home-content'>
              <h1>Present your awesome product</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button title='Buy for $150'></Button>
            </div>
          </div>
          <div className='col-lg-6 order-first order-lg-last'>
            <div className='home-img'>
              <img src={showCaseImg} alt='product' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
