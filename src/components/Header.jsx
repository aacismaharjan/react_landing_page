import React from 'react'

const NavItemLink = ({ item: { href, text, isActive } }) => {
  return (
    <li className='nav-item'>
      <a className={isActive ? 'nav-link active' : 'nav-link'} href={href}>
        {text}
      </a>
    </li>
  )
}

export default function Header() {
  const navItemsLink = [
    {
      href: '#home',
      text: 'Home',
      isActive: true,
    },
    {
      href: '#about',
      text: 'About',
      isActive: false,
    },
    {
      href: '#features',
      text: 'Features',
      isActive: false,
    },
    {
      href: '#products',
      text: 'Products',
      isActive: false,
    },
    {
      href: '#testinomial',
      text: 'Testinomial',
      isActive: false,
    },
    {
      href: '#faq',
      text: 'Faq',
      isActive: false,
    },
    {
      href: '#contact',
      text: 'Contact',
      isActive: false,
    },
  ]

  return (
    <header className='header fixed-top'>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <a className='navbar-brand' href='#home'>
            <span className='logo-circle'></span>
            Shala
          </a>

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#collapsibleNavbar'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='collapsibleNavbar'>
            <ul className='navbar-nav ml-auto'>
              {navItemsLink.map((item, index) => {
                return <NavItemLink item={item} key={index} />
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
