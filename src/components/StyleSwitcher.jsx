import React from 'react'
import { colorPalettes } from '../Database'

const toggleSwitcher = () => {
  document.querySelector('.style-switcher').classList.toggle('open')
}

export default function StyleSwitcher() {
  const setActiveStyle = (color) => {
    document.documentElement.style.setProperty('--theme', color)
  }

  const ColorSwitcherIcon = ({ item: { title, color } }) => {
    return (
      <li
        title={title}
        style={{ backgroundColor: color }}
        onClick={(e) => setActiveStyle(color)}
        key={title}
      />
    )
  }

  const switcherIconItems = colorPalettes

  return (
    <div className='style-switcher'>
      <h5>Style Switcher</h5>
      <ul className='list-unstyled'>
        {switcherIconItems.map((item, index) => (
          <ColorSwitcherIcon item={item} key={index} />
        ))}
      </ul>
    </div>
  )
}

export { toggleSwitcher }