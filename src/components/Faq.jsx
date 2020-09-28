import React from 'react'
import Section from './Section'
import { faqData } from '../Database'

const FaqItem = ({ ques, ans }) => {
  return (
    <div className='faq-item'>
      <h4>{ques}</h4>
      <p>{ans}</p>
    </div>
  )
}

export { FaqItem }

export default function Faq() {
  const faqItems = faqData
  return (
    <Section
      title='Faq'
      subtitle='Frequently Asked Question'
      className='faq-section'
      id='faq'
    >
      <div className='row'>
        {faqItems.map(({ ques, ans }, index) => (
          <div className='col-md-6' key={index}>
            <FaqItem ques={ques} ans={ans} />
          </div>
        ))}

        <div className='col-lg-12'>
          <p className='support-text text-center'>
            Any Question?
            <a href='#home'>info@domain.com</a>
          </p>
        </div>
      </div>
    </Section>
  )
}
