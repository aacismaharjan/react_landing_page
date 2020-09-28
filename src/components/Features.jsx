import React from 'react'

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
        <div class='row justify-content-center'>
          <div class='col-lg-7'>
            <div class='section-title'>
              <h1 class='title'>Features</h1>
              <h2 class='subtitle'>Lorem ipsum dolor sit amet</h2>
            </div>
          </div>
        </div>

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
