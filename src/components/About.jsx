import React from 'react'
import aboutImg from '../img/watch-02.jpg'
import Section from './Section'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <Section className='about-section' id='about'>
      <div className='row'>
        <div className='col-lg-6 d-flex'>
          <div className='about-img'>
            <img src={aboutImg} alt='product' />
          </div>
        </div>

        <div className='col-lg-6 order-first order-lg-last'>
          <SectionTitle
            title='About Product'
            subtitle='Awesome digital watch can make your life easier'
            isLeft
          />

          <div className='about-content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>

            <ul className='list-unstyled'>
              <li>
                <i className='fas fa-check'></i>
                Our all products are high qualitye
              </li>
              <li>
                <i className='fas fa-check'></i>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li>
                <i className='fas fa-check'></i>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li>
                <i className='fas fa-check'></i>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
