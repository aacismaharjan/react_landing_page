import React from 'react'
import product1 from '../img/products/1.jpg'
import product2 from '../img/products/2.jpg'
import product3 from '../img/products/3.jpg'
import product4 from '../img/products/4.jpg'
import product5 from '../img/products/5.jpg'

const ProductItem = ({ product: { showcase, newPrice, oldPrice, desc } }) => {
  return (
    <div class='products-item'>
      <div class='product-img'>
        <img src={showcase} alt='product' class='img-fluid' />
        <div class='overlay'>
          <a href='#' class='btn mybtn1'>
            Buy Now
          </a>
        </div>
      </div>
      <div class='product-content'>
        <div class='product-price'>
          <span class='new-price'>${newPrice}</span>
          <span class='old-price'>${oldPrice}</span>
        </div>

        <h5 class='product-name'>{desc}</h5>
      </div>
    </div>
  )
}

export { ProductItem }

export default function Products() {
  const productItems = [
    {
      showcase: product1,
      newPrice: 49,
      oldPrice: 95,
      desc: 'Simple product 001',
    },
    {
      showcase: product2,
      newPrice: 49,
      oldPrice: 95,
      desc: 'Simple product 002',
    },
    {
      showcase: product3,
      newPrice: 49,
      oldPrice: 95,
      desc: 'Simple product 003',
    },
    {
      showcase: product4,
      newPrice: 49,
      oldPrice: 95,
      desc: 'Simple product 004',
    },
    {
      showcase: product5,
      newPrice: 49,
      oldPrice: 95,
      desc: 'Simple product 005',
    },
  ]
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
            {productItems.map((product, index) => (
              <div class='col-lg-12' key={index}>
                <ProductItem product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
