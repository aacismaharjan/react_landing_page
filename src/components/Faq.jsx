import React from 'react'
import Section from './Section'

const FaqItem = ({ ques, ans }) => {
  return (
    <div class='faq-item'>
      <h4>{ques}</h4>
      <p>{ans}</p>
    </div>
  )
}

export { FaqItem }

export default function Faq() {
  const faqItems = [
    {
      ques: 'How can I buy the watch?',
      ans:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      ques: 'How can I buy the watch?',
      ans:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      ques: 'How can I buy the watch?',
      ans:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      ques: 'How can I buy the watch?',
      ans:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      ques: 'How can I buy the watch?',
      ans:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      ques: 'How can I buy the watch?',
      ans:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      ques: 'How can I buy the watch?',
      ans:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      ques: 'How can I buy the watch?',
      ans:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]
  return (
    <Section
      title='Faq'
      subtitle='Frequently Asked Question'
      className='faq-section'
      id='faq'
    >
      <div class='row'>
        {faqItems.map(({ ques, ans }, index) => (
          <div class='col-md-6' key={index}>
            <FaqItem ques={ques} ans={ans} />
          </div>
        ))}

        <div class='col-lg-12'>
          <p class='support-text text-center'>
            Any Question?
            <a href='#home'>info@domain.com</a>
          </p>
        </div>
      </div>
    </Section>
  )
}
