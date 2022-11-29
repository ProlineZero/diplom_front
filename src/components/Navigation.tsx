import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    
<nav className="h-[50px] flex justify-between px-10 bg-gray-500 items-center text-white">
      <span className="font-bold">React 2022</span>

      <span>
        <Link to="/authorization">Авторизация</Link>
        <Link to="/registration">Регитстрация</Link>
      </span>
    </nav>

  )
}