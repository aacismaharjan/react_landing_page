import React from 'react'
import product1 from '../img/products/1.jpg'
import product2 from '../img/products/2.jpg'
import product3 from '../img/products/3.jpg'
import product4 from '../img/products/4.jpg'
import product5 from '../img/products/5.jpg'

export default function Products() {
  return (
    <section class='products-section' id='products'>
      <div class='container'>
        <div class='row justify-content-center'>
          <div class='col-lg-7'>
            <div class='section-title'>
              <h1 class='title'>Our Products</h1>
              <h2 class='subtitle'>
                We have lots of excellent and high quality products
              </h2>
            </div>
          </div>
        </div>

        <div class='row'>
          <div class='owl-carousel' id='product-carousel'>
            <div class='col-lg-12'>
              <div class='products-item'>
                <div class='product-img'>
                  <img src={product1} alt='product' class='img-fluid' />
                  <div class='overlay'>
                    <a href='#' class='btn mybtn1'>
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class='product-content'>
                  <div class='product-price'>
                    <span class='new-price'>$49</span>
                    <span class='old-price'>$95</span>
                  </div>

                  <h5 class='product-name'>Simple product 001</h5>
                </div>
              </div>
            </div>

            <div class='col-lg-12'>
              <div class='products-item'>
                <div class='product-img'>
                  <img src={product2} alt='product' class='img-fluid' />
                  <div class='overlay'>
                    <a href='#' class='btn mybtn1'>
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class='product-content'>
                  <div class='product-price'>
                    <span class='new-price'>$49</span>
                    <span class='old-price'>$95</span>
                  </div>

                  <h5 class='product-name'>Simple product 002</h5>
                </div>
              </div>
            </div>

            <div class='col-lg-12'>
              <div class='products-item'>
                <div class='product-img'>
                  <img src={product3} alt='product' class='img-fluid' />
                  <div class='overlay'>
                    <a href='#' class='btn mybtn1'>
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class='product-content'>
                  <div class='product-price'>
                    <span class='new-price'>$49</span>
                    <span class='old-price'>$95</span>
                  </div>

                  <h5 class='product-name'>Simple product 003</h5>
                </div>
              </div>
            </div>

            <div class='col-lg-12'>
              <div class='products-item'>
                <div class='product-img'>
                  <img src={product4} alt='product' class='img-fluid' />
                  <div class='overlay'>
                    <a href='#' class='btn mybtn1'>
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class='product-content'>
                  <div class='product-price'>
                    <span class='new-price'>$49</span>
                    <span class='old-price'>$95</span>
                  </div>

                  <h5 class='product-name'>Simple product 004</h5>
                </div>
              </div>
            </div>

            <div class='col-lg-12'>
              <div class='products-item'>
                <div class='product-img'>
                  <img src={product5} alt='product' class='img-fluid' />
                  <div class='overlay'>
                    <a href='#' class='btn mybtn1'>
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class='product-content'>
                  <div class='product-price'>
                    <span class='new-price'>$49</span>
                    <span class='old-price'>$95</span>
                  </div>

                  <h5 class='product-name'>Simple product 005</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
