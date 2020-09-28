import React from 'react'

const SocialIconLinks = ({ href, name }) => {
  return (
    <a href={href}>
      <i className={'fab fa-' + name}></i>
    </a>
  )
}

export default function Footer() {
  const socialLinks = [
    {
      href: '#home',
      name: 'facebook-f',
    },
    {
      href: '#home',
      name: 'twitter',
    },
    {
      href: '#home',
      name: 'instagram',
    },
    {
      href: '#home',
      name: 'linkedin',
    },
    {
      href: '#home',
      name: 'youtube',
    },
  ]
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='footer-logo'>
              <a href='#home'>
                <span className='logo-circle'></span>
                Shala
              </a>
            </div>

            <div className='footer-text'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>

            <div className='footer-social-links'>
              {socialLinks.map((link, index) => (
                <SocialIconLinks
                  href={link.href}
                  name={link.name}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='copyright'>
        <p>Copyright &copy; The WebShala, 2020. Reactify by Aashish</p>
      </div>
    </footer>
  )
}
