import React, { useState } from 'react'
import { InputString } from '../components/InputString'
import {Link} from 'react-router-dom'
import { Navigation } from '../components/Navigation'
import { wait } from '@testing-library/user-event/dist/utils'
import { delay } from '../functions/common'

export function AuthorizationPage() {

  function try_authorization() {
    const response = true
    if (response) {
      setSuccessAutho(true)
      delay(1000).then(() => window.location.assign('/'))
    } else {
      setErrorAutho(true)
    }
  }

  const [emailInput, setEmailInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')
  const [successAutho, setSuccessAutho] = useState(false)
  const [errorAutho, setErrorAutho] = useState(false)

  return (
    <>
      {/* <Navigation numPressedBtn={-1}/> */}
      <div
        className = "fixed bg-gray-100 w-5/12 h-1/2 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-3xl border-l-2 border-r-2 border-red-600 shadow-2xl shadow-black/50">
      
      <div className="container w-1/2 space-y-3 fixed inline-block text-left left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <h2 className="text-3xl text-center text-red-700">Car Guide</h2>
          <h1 className='text-2xl text-center text-gray-500'>Вход</h1>
          <InputString title='E-mail' placeholder = 'Введите E-mail' name = 'email' setInput={setEmailInput}/>
          <InputString title='Пароль' placeholder = 'Введите пароль' name = 'password' setInput={setPasswordInput}/>
          <button className=" w-full px-2 py-1 transition ease-in duration-200 uppercase rounded-full text-red-700 hover:bg-red-600 hover:text-white border-2 border-red-700 focus:outline-none"
          onClick={() => {try_authorization()}}>
            Войти
          </button>
        <h1 className='text-gray-500 text-sm text-center overline'>Нет аккаунта в Car Guide?</h1>
        <div className={successAutho? 'visible' : 'hidden'}>
          <h1 className='text-green-500 text-xm text-center py-2 underline'>Вход выполнен</h1>
        </div>
        <div className={errorAutho? 'visible' : 'hidden'}>
          <h1 className='text-red-500 text-xm text-center py-2 underline'>Неправильно указан логин и/или пароль</h1>
        </div>
        <button type="button" className="w-full px-2 py-1 transition ease-in duration-200 uppercase rounded-full bg-red-100 text-red-700 border-red-100 hover:bg-red-200 hover:border-red-200 border-2 focus:outline-none "
        onClick= {() => window.location.assign('/registration')}>
          Зарегистрироваться
        </button>
      </div>
    </div>

    </>
    
  )
}

//console.log('email: ', emailInput, ' password: ', passwordInput)