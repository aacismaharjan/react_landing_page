import React from 'react'
import Button from './Button'
import SectionTitle from './SectionTitle'

export default function Newsletter() {
  return (
    <section class='newsletter-section'>
      <div class='container'>
        <SectionTitle title='Newsletter' subtitle='Subscribe To Get Updates' />

        <div class='row justify-content-center'>
          <div class='col-md-10 col-lg-7'>
            <form class='newsletter-form'>
              <div class='form-group'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Enter Your Mail'
                />

                <Button
                  type='mybtn2'
                  title='Subscribe'
                  icon='far fa-paper-plane'
                ></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
