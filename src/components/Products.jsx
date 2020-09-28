import React from 'react'
import product1 from '../img/products/1.jpg'
import product2 from '../img/products/2.jpg'
import product3 from '../img/products/3.jpg'
import product4 from '../img/products/4.jpg'
import product5 from '../img/products/5.jpg'
import Button from './Button'
import Section from './Section'

const ProductItem = ({ product: { showcase, newPrice, oldPrice, desc } }) => {
  return (
    <div class='products-item'>
      <div class='product-img'>
        <img src={showcase} alt='product' class='img-fluid' />
        <div class='overlay'>
          <Button title='Buy Now' />
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
    <Section
      title='Our Products'
      subtitle='We have lots of excellent and high quality products'
      className='products-section'
      id='products'
    >
      <div class='row'>
        <div class='owl-carousel' id='product-carousel'>
          {productItems.map((product, index) => (
            <div class='col-lg-12' key={index}>
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
