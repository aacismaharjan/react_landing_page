import React from 'react'
import { featuresData } from '../Database'
import SectionTitle from './SectionTitle'

const FeatureItem = ({ icon, title, subtitle }) => {
  return (
    <div className='features-item col-lg-12'>
      <div className='icon'>
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  )
}

export default function Features() {
  const featureItems = featuresData

  return (
    <section className='features-section bg-light' id='features'>
      <div className='container'>
        <SectionTitle title='Features' subtitle='Lorem ipsum dolor sit amet' />

        <div className='row'>
          {featureItems.map(({ icon, title, subtitle }, index) => (
            <div className='col-lg-4 col-md-6 d-flex' key={index}>
              <FeatureItem icon={icon} title={title} subtitle={subtitle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { FeatureItem }
