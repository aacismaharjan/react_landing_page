import React from 'react'
import { contactItemsData } from '../Database'
import Button from './Button'
import Section from './Section'

const ContactItem = ({ item: { icon, title, subtitle } }) => {
  return (
    <div className='contact-item'>
      <div className='icon'>
        <i className={icon}></i>
      </div>
      <h5>{title}</h5>
      <p>{subtitle}</p>
    </div>
  )
}

export default function Contact() {
  const contactItems = contactItemsData

  return (
    <Section
      title='Contact us'
      subtitle='Lorem ipsum dolor sit amet'
      className='contact-section'
      id='contact'
    >
      <div className='row'>
        <div className='col-md-7'>
          <form className='contact-form'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Your Name'
                  />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Your Email'
                  />
                </div>
              </div>
            </div>

            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Your Subject'
              />
            </div>

            <div className='form-group'>
              <textarea
                className='form-control'
                placeholder='Message'
              ></textarea>
            </div>

            <div className='form-group'>
              <Button type='mybtn2' title='Send Message'></Button>
            </div>
          </form>
        </div>

        <div className='col-md-5 order-first order-md-last'>
          {contactItems.map((item, index) => (
            <ContactItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
