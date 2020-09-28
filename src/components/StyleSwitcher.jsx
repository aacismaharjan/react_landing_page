import React from 'react'

const toggleSwitcher = () => {
  const el = document.querySelector('.style-switcher')
  el.classList.toggle('open')
}

export { toggleSwitcher }

export default function StyleSwitcher() {
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
      <h5>Style Switcher</h5>
      <ul className='list-unstyled'>
        <li
          title='crimson'
          style={{ backgroundColor: '#d70d25' }}
          onClick={() => {
            setActiveStyle('crimson')
            toggleSwitcher()
          }}
        ></li>
        <li
          title='blue'
          style={{ backgroundColor: '#4948d4' }}
          onClick={() => {
            setActiveStyle('blue')
            toggleSwitcher()
          }}
        ></li>
        <li
          title='indigo'
          style={{ backgroundColor: '#6400ae' }}
          onClick={() => {
            setActiveStyle('indigo')
            toggleSwitcher()
          }}
        ></li>
        <li
          title='aqua'
          style={{ backgroundColor: '#05b3b6' }}
          onClick={() => {
            setActiveStyle('aqua')
            toggleSwitcher()
          }}
        ></li>
        <li
          title='black'
          style={{ backgroundColor: '#222222' }}
          onClick={() => {
            setActiveStyle('black')
            toggleSwitcher()
          }}
        ></li>
      </ul>
    </div>
  )
}
