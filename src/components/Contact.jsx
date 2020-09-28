import React from 'react'
import Button from './Button'
import SectionTitle from './SectionTitle'

export default function Contact() {
  return (
    <section class='contact-section' id='contact'>
      <div class='container'>
        <SectionTitle
          title='Contact us'
          subtitle='Lorem ipsum dolor sit amet'
        />

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

              <div class='row'>
                <div class='col-md-12'>
                  <div class='form-group'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Your Subject'
                    />
                  </div>
                </div>
              </div>

              <div class='row'>
                <div class='col-md-12'>
                  <div class='form-group'>
                    <textarea
                      class='form-control'
                      placeholder='Message'
                    ></textarea>
                  </div>
                </div>
              </div>

              <div class='row'>
                <div class='col-md-12'>
                  <div class='form-group'>
                    <Button type='mybtn2' title='Send Message'></Button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div class='col-md-5 order-first order-md-last'>
            <div class='contact-item'>
              <div class='icon'>
                <i class='fas fa-map-marker-alt'></i>
              </div>
              <h5>Location</h5>
              <p>B261 aqua Park, New Delhi,122222</p>
            </div>

            <div class='contact-item'>
              <div class='icon'>
                <i class='fas fa-envelope'></i>
              </div>
              <h5>Email</h5>
              <p>info@yourdomain.com</p>
            </div>

            <div class='contact-item'>
              <div class='icon'>
                <i class='fas fa-phone'></i>
              </div>
              <h5>Call on us</h5>
              <p>9100-000-000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
