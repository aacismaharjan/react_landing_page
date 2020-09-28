import React from 'react'
import Testi1 from '../img/testimonial/1.jpg'
import Testi2 from '../img/testimonial/2.jpg'
import Testi3 from '../img/testimonial/3.jpg'

export default function Testinomial() {
  return (
    <section class='testinomial-section' id='testinomial'>
      <div class='container'>
        <div class='row justify-content-center'>
          <div class='col-lg-7'>
            <div class='section-title'>
              <h1 class='title'>Testimonial</h1>
              <h2 class='subtitle'>Our Satisfied Customer Feedback</h2>
            </div>
          </div>
        </div>

        <div class='row'>
          <div class='owl-carousel' id='testinomial-carousel'>
            <div class='col-lg-12'>
              <div class='testi-item'>
                <div class='testi-comment'>
                  <p>
                    <i class='fas fa-quote-left'></i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    <i class='fas fa-quote-right'></i>
                  </p>

                  <ul class='stars list-unstyled'>
                    <li>
                      <i class='fas fa-star'></i>
                    </li>
                    <li>
                      <i class='fas fa-star'></i>
                    </li>
                    <li>
                      <i class='fas fa-star'></i>
                    </li>
                    <li>
                      <i class='fas fa-star-half-alt'></i>
                    </li>
                    <li>
                      <i class='far fa-star'></i>
                    </li>
                  </ul>
                </div>

                <div class='client-info'>
                  <img src={Testi1} alt='testinomial' />
                  <h5>Soshiv Upreti</h5>
                  <p>CEO Webshala</p>
                </div>
              </div>
            </div>

            <div class='col-lg-12'>
              <div class='testi-item'>
                <div class='testi-comment'>
                  <p>
                    <i class='fas fa-quote-left'></i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    <i class='fas fa-quote-right'></i>
                  </p>

                  <ul class='stars list-unstyled'>
                    <li>
                      <i class='fas fa-star'></i>
                    </li>
                    <li>
                      <i class='fas fa-star'></i>
                    </li>
                    <li>
                      <i class='fas fa-star'></i>
                    </li>
                    <li>
                      <i class='fas fa-star-half-alt'></i>
                    </li>
                    <li>
                      <i class='far fa-star'></i>
                    </li>
                  </ul>
                </div>

                <div class='client-info'>
                  <img src={Testi2} alt='testinomial' />
                  <h5>Pine Apple</h5>
                  <p>CEO Webshala</p>
                </div>
              </div>
            </div>

            <div class='col-lg-12'>
              <div class='testi-item'>
                <div class='testi-comment'>
                  <p>
                    <i class='fas fa-quote-left'></i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    <i class='fas fa-quote-right'></i>
                  </p>

                  <ul class='stars list-unstyled'>
                    <li>
                      <i class='fas fa-star'></i>
                    </li>
                    <li>
                      <i class='fas fa-star'></i>
                    </li>
                    <li>
                      <i class='fas fa-star'></i>
                    </li>
                    <li>
                      <i class='fas fa-star-half-alt'></i>
                    </li>
                    <li>
                      <i class='far fa-star'></i>
                    </li>
                  </ul>
                </div>

                <div class='client-info'>
                  <img src={Testi3} alt='testinomial' />
                  <h5>Jitender Kumar</h5>
                  <p>CEO Webshala</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
