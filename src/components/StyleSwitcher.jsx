import React from 'react'

const toggleSwitcher = () => {
  const el = document.querySelector('.style-switcher')
  el.classList.toggle('open')
}

const setActiveStyle = (e) => {
  const color = e.target.title
  const hexColor =
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--' + color) || 'crimson'

  document.documentElement.style.setProperty('--theme', hexColor)
}

export default function StyleSwitcher() {
  const ColorSwitcherIcon = ({ item: { title, color } }) => {
    return (
      <li
        title={title}
        style={{ backgroundColor: color }}
        onClick={(e) => setActiveStyle(e)}
        key={title}
      ></li>
    )
  }

  const switcherIconItems = [
    {
      title: 'crimson',
      color: '#d70d25',
    },
    {
      title: 'blue',
      color: '#4948d4',
    },
    {
      title: 'indigo',
      color: '#6400ae',
    },
    {
      title: 'aqua',
      color: '#05b3b6',
    },
    {
      title: 'black',
      color: '#222222',
    },
  ]

  return (
    <div className='style-switcher'>
      <h5>Style Switcher</h5>
      <ul className='list-unstyled'>
        {switcherIconItems.map((item, index) => (
          <ColorSwitcherIcon item={item} />
        ))}
      </ul>
    </div>
  )
}

export { toggleSwitcher }
