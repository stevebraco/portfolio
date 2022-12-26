import React from 'react'
import { NavLink, NavStyles } from './NavigationStyles'

const Navigation = () => {
  return (
    <NavStyles>
      <NavLink href="/">Projets</NavLink>
      <NavLink href="/">Contact</NavLink>
      <NavLink href="/">Resume</NavLink>
    </NavStyles>
  )
}

export default Navigation
