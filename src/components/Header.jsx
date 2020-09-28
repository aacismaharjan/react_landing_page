import React from 'react'

export default function Header() {
  return (
    <header class='header fixed-top'>
      <div class='container'>
        <nav class='navbar navbar-expand-lg navbar-light'>
          <a class='navbar-brand' href='#home'>
            <span class='logo-circle'></span>
            Shala
          </a>

          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#collapsibleNavbar'
          >
            <span class='navbar-toggler-icon'></span>
          </button>

          <div class='collapse navbar-collapse' id='collapsibleNavbar'>
            <ul class='navbar-nav ml-auto'>
              <li class='nav-item'>
                <a class='nav-link active' href='#home'>
                  Home
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#about'>
                  About
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#features'>
                  Features
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#products'>
                  Products
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#testinomial'>
                  Testinomial
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#faq'>
                  Faq
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
