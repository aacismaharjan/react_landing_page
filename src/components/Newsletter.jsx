import React from 'react'
import Button from './Button'
import Section from './Section'

export default function Newsletter() {
  return (
    <Section
      title='Newsletter'
      subtitle='Subscribe To Get Updates'
      className='newsletter-section'
      id='products'
    >
      <div className='row justify-content-center'>
        <div className='col-md-10 col-lg-7'>
          <form className='newsletter-form'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Your Mail'
              />

              <Button
                type='mybtn2'
                title='Subscribe'
                icon='far fa-paper-plane'
              />
            </div>
          </form>
        </div>
      </div>
    </Section>
  )
}
