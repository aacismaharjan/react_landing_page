import React from 'react'

export default function Contact() {
  return (
    <section class='contact-section' id='contact'>
      <div class='container'>
        <div class='row justify-content-center'>
          <div class='col-lg-7'>
            <div class='section-title'>
              <h1 class='title'>Contact us</h1>
              <h2 class='subtitle'>Lorem ipsum dolor sit amet</h2>
            </div>
          </div>
        </div>

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
                    <button type='submit' class='btn mybtn2'>
                      Send Message
                    </button>
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
