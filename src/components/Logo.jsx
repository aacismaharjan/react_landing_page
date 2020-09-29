import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link className='navbar-brand' href='/'>
      <i className='fab fa-apple mr-2'></i>
      Watch
    </Link>
  )
}
