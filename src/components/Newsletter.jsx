import React from 'react'

export default function Newsletter() {
  return (
    <section class='newsletter-section'>
      <div class='container'>
        <div class='row justify-content-center'>
          <div class='col-lg-7'>
            <div class='section-title'>
              <h1 class='title'>Newsletter</h1>
              <h2 class='subtitle'>Subscribe To Get Updates</h2>
            </div>
          </div>
        </div>

        <div class='row justify-content-center'>
          <div class='col-md-10 col-lg-7'>
            <form class='newsletter-form'>
              <div class='form-group'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Enter Your Mail'
                />
                <button type='submit' class='btn mybtn2'>
                  <span>Subscribe</span>
                  <i class='far fa-paper-plane'></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
