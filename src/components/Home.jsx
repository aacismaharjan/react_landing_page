import React from 'react'
import showCaseImg from '../img/watch-01.png'

export default function Home() {
  return (
    <section class='home-section' id='home'>
      <div class='bg-shapes'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-6'>
            <div class='home-content'>
              <h1>Present your awesome product</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href='#' class='btn mybtn1'>
                Buy For $150
              </a>
            </div>
          </div>
          <div class='col-lg-6 order-first order-lg-last'>
            <div class='home-img'>
              <img src={showCaseImg} alt='product' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
