import React from 'react'
import Section from './Section'
import { testiData } from '../Database'

const TestinomialItem = ({ testi: { comment, avatar, name, post } }) => {
  return (
    <div className='testi-item'>
      <div className='testi-comment'>
        <p>
          <i className='fas fa-quote-left'></i>
          {comment}
          <i className='fas fa-quote-right'></i>
        </p>

        <ul className='stars list-unstyled'>
          <li>
            <i className='fas fa-star'></i>
          </li>
          <li>
            <i className='fas fa-star'></i>
          </li>
          <li>
            <i className='fas fa-star'></i>
          </li>
          <li>
            <i className='fas fa-star-half-alt'></i>
          </li>
          <li>
            <i className='far fa-star'></i>
          </li>
        </ul>
      </div>

      <div className='client-info'>
        <img src={avatar} alt='testinomial' />
        <h5>{name}</h5>
        <p>{post}</p>
      </div>
    </div>
  )
}

export { TestinomialItem }

export default function Testinomial() {
  const testiItems = testiData
  return (
    <Section
      title='Testimonial'
      subtitle='Our Satisfied Customer Feedback'
      className='testinomial-section'
      id='testinomial'
    >
      <div className='row'>
        <div className='owl-carousel' id='testinomial-carousel'>
          {testiItems.map((testi, index) => (
            <div className='col-lg-12' key={index}>
              <TestinomialItem testi={testi} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
