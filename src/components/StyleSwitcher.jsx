import React from 'react'

export default function StyleSwitcher() {
  const toggleSwitcher = () => {
    const el = document.querySelector('.style-switcher')
    el.classList.toggle('open')
  }

  const setActiveStyle = (name) => {
    let el = document.querySelectorAll('.alternate-style')
    for (let i = 0; i < el.length; i++) {
      el[i].setAttribute('disabled', true)
    }

    document
      .querySelectorAll(`.alternate-style[title=${name}]`)[0]
      .removeAttribute('disabled')
  }

  return (
    <div className='style-switcher'>
      <div className='toggle-style-switcher' onClick={toggleSwitcher}>
        <i className='fas fa-cog fa-spin'></i>
      </div>
      <h5>Style Switcher</h5>
      <ul className='list-unstyled'>
        <li
          title='crimson'
          style={{ backgroundColor: '#d70d25' }}
          onClick={() => setActiveStyle('crimson')}
        ></li>
        <li
          title='blue'
          style={{ backgroundColor: '#4948d4' }}
          onClick={() => setActiveStyle('blue')}
        ></li>
        <li
          title='indigo'
          style={{ backgroundColor: '#6400ae' }}
          onClick={() => setActiveStyle('indigo')}
        ></li>
        <li
          title='aqua'
          style={{ backgroundColor: '#05b3b6' }}
          onClick={() => setActiveStyle('aqua')}
        ></li>
        <li
          title='black'
          style={{ backgroundColor: '#222222' }}
          onClick={() => setActiveStyle('black')}
        ></li>
      </ul>
    </div>
  )
}
