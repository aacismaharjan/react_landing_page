import React from 'react'
import SectionTitle from './SectionTitle'

const FeatureItem = ({ icon, title, subtitle }) => {
  return (
    <div class='features-item col-lg-12'>
      <div class='icon'>
        <i class={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  )
}

export default function Features() {
  const featureItems = [
    {
      icon: 'fas fa-bell',
      title: 'Notification Alert',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: 'fas fa-wifi',
      title: 'Support Wifi',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'GPS Tracking',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: 'fas fa-comments',
      title: 'Live Chat',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: 'fas fa-camera',
      title: 'Camera',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: 'fab fa-bluetooth',
      title: 'Bluetooth',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
  ]

  return (
    <section class='features-section bg-light' id='features'>
      <div class='container'>
        <SectionTitle title='Features' subtitle='Lorem ipsum dolor sit amet' />

        <div class='row'>
          {featureItems.map(({ icon, title, subtitle }, index) => (
            <div class='col-lg-4 col-md-6 d-flex' key={index}>
              <FeatureItem icon={icon} title={title} subtitle={subtitle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { FeatureItem }
