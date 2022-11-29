import React from 'react'
import { InputString } from '../components/InputString'
import {Link} from 'react-router-dom'

export function AuthorizationPage() {
  return (
    <div className=" container w-1/4 space-y-3 fixed inline-block text-left left-1/2 -translate-x-1/2">
      <h1 className='text-2xl text-center'>Авторизация</h1>
      <InputString title='E-mail' placeholder = 'Введите E-mail' name = 'email' />
      <InputString title='Пароль' placeholder = 'Введите пароль' name = 'password' />
      <button className=" w-full px-2 py-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
        Войти
      </button>
      <button className=" w-full px-2 py-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
      onClick= {() => window.location.assign('http://localhost:3000/')}>
        Назад
      </button>
    </div>
    
  )
}