import React from 'react'
import { socialLinksData } from '../Database'
import Logo from './Logo'

const SocialIconLinks = ({ href, name }) => {
  return (
    <a href={href} className='mx-1'>
      <i className={'fab fa-' + name}></i>
    </a>
  )
}

export default function Footer() {
  const socialLinks = socialLinksData
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='footer-logo'>
              <Logo />
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
        <p>&copy; Reactify by Aashish Maharjan, 2020</p>
      </div>
    </footer>
  )
}
