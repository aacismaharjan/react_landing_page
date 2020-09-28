import React from 'react'

export default function Footer() {
  return (
    <footer class='footer'>
      <div class='container'>
        <div class='row justify-content-center'>
          <div class='col-lg-6'>
            <div class='footer-logo'>
              <a href='#'>
                <span class='logo-circle'></span>
                Shala
              </a>
            </div>

            <div class='footer-text'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>

            <div class='footer-social-links'>
              <a href='#'>
                <i class='fab fa-facebook-f'></i>
              </a>
              <a href='#'>
                <i class='fab fa-twitter'></i>
              </a>
              <a href='#'>
                <i class='fab fa-instagram'></i>
              </a>
              <a href='#'>
                <i class='fab fa-linkedin'></i>
              </a>
              <a href='#'>
                <i class='fab fa-youtube'></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class='copyright'>
        <p>Copyright &copy; The WebShala, 2020</p>
      </div>
    </footer>
  )
}
