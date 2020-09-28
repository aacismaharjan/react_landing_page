import React from 'react'

export default function Button({ title, icon, type = 'mybtn1' }) {
  return (
    <a href='#' className={'btn ' + type}>
      <span className={icon ? 'mr-2' : ''}>{title}</span>
      {icon && <i className={icon}></i>}
    </a>
  )
}
