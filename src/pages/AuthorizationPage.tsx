import React from 'react'
import { InputString } from '../components/InputString'
import {Link} from 'react-router-dom'

export function AuthorizationPage() {
  return (
    <>
      <div
        className = "fixed bg-gray-100 w-5/12 h-1/2 left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/2 rounded-3xl">
      
      <div className="container w-1/2 space-y-3 fixed inline-block text-left left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <h2 className="text-3xl text-center text-purple-500">Online Books</h2>
          <h1 className='text-2xl text-center text-gray-500'>Вход</h1>
          <InputString title='E-mail' placeholder = 'Введите E-mail' name = 'email' />
          <InputString title='Пароль' placeholder = 'Введите пароль' name = 'password' />
          <button className=" w-full px-2 py-1 transition ease-in duration-200 uppercase rounded-full text-purple-700 hover:bg-purple-600 hover:text-white border-2 border-purple-700 focus:outline-none">
            Войти
          </button>
        <h1 className='text-gray-500 text-sm text-center overline'>Нет аккаунта в Online Books?</h1>
        <button type="button" className="w-full px-2 py-1 transition ease-in duration-200 uppercase rounded-full bg-purple-100 text-purple-500 border-purple-100 hover:bg-purple-200 hover:border-purple-200 border-2 focus:outline-none "
        onClick= {() => window.location.assign('http://localhost:3000/registration')}>
          Зарегистрироваться
        </button>
      </div>
    </div>
    </>
    
  )
}