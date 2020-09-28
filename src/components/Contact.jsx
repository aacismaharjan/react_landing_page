import React from 'react'
import Button from './Button'
import Section from './Section'

const ContactItem = ({ item: { icon, title, subtitle } }) => {
  return (
    <div class='contact-item'>
      <div class='icon'>
        <i class={icon}></i>
      </div>
      <h5>{title}</h5>
      <p>{subtitle}</p>
    </div>
  )
}

export default function Contact() {
  const contactItems = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      subtitle: 'B261 aqua Park, New Delhi,122222',
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      subtitle: 'info@yourdomain.com',
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Call on us',
      subtitle: '9100-000-000',
    },
  ]

  return (
    <Section
      title='Contact us'
      subtitle='Lorem ipsum dolor sit amet'
      className='contact-section'
      id='contact'
    >
      <div class='row'>
        <div class='col-md-7'>
          <form class='contact-form'>
            <div class='row'>
              <div class='col-md-6'>
                <div class='form-group'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Your Name'
                  />
                </div>
              </div>

              <div class='col-md-6'>
                <div class='form-group'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Your Email'
                  />
                </div>
              </div>
            </div>

            <div class='form-group'>
              <input
                type='text'
                class='form-control'
                placeholder='Your Subject'
              />
            </div>

            <div class='form-group'>
              <textarea class='form-control' placeholder='Message'></textarea>
            </div>

            <div class='form-group'>
              <Button type='mybtn2' title='Send Message'></Button>
            </div>
          </form>
        </div>

        <div class='col-md-5 order-first order-md-last'>
          {contactItems.map((item, index) => (
            <ContactItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
