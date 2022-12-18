import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { InputString } from '../components/InputString'
import { delay } from '../functions/common'
import { IUser } from "../models"

export function RegistrationPage() {

  const [emailInput, setEmailInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')
  const [firstNameInput, setFirstNameInput] = useState<string>('')
  const [lastNameInput, setLastNameInput] = useState<string>('')
  const [successReg, setSuccessReg] = useState(false)
  const [errorReg, setErrorReg] = useState(false)
  const [regStatus, setRegStatus] = useState<boolean>()
  const [clickReg, setClickReg] = useState(0)
  const [jwt, setJwt] = useState('')

  let user:IUser = {
    first_name: firstNameInput,
    last_name: lastNameInput,
    email: emailInput,
    password: passwordInput
  }
  useEffect(() => {
    user = {
      first_name: firstNameInput,
      last_name: lastNameInput,
      email: emailInput,
      password: passwordInput
    }
  }, [clickReg])
  

  async function checkRegistration()  {
    const response = await axios.post<{success: boolean, jwt:string}>('https://carguider.ru/api/register/', user)
    setRegStatus(response.data.success)
    setJwt(response.data.jwt)
    tryRegistration()
  }

  useEffect(() => {
    tryRegistration()
  }, [regStatus])
    
  function tryRegistration() {
    const response = regStatus
    if (response != undefined) {
      if (response) {
        setSuccessReg(true)
        setErrorReg(false)
        localStorage.setItem('jwt', jwt)
        delay(1000).then(() => window.location.assign('/'))
      } else {
        setErrorReg(true)
        setSuccessReg(false)
      }
    }
  }
  return (
    <>

      <div className="fixed bg-gray-100 w-5/12 h-1/2 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-3xl border-l-2 border-r-2 border-red-600 shadow-2xl shadow-black/50">
        <div className="container w-1/2 space-y-3 fixed inline-block text-left left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <h2 className="text-3xl text-center text-red-700">Car Guider</h2>
          <h1 className='text-2xl text-center text-gray-500'>Регистрация</h1>
          <div className="w-full">
                  <div className="flex gap-4 mb-2">
                    <InputString title='' placeholder = 'Имя' name = 'firstname' setInput = {setFirstNameInput}/>
                    <InputString title='' placeholder = 'Фамилия' name = 'lastname' setInput = {setLastNameInput}/>
                  </div>
                  <div className="flex flex-col mb-2">
                    <InputString title='' placeholder = 'E-mail' name = 'email' setInput = {setEmailInput}/>
                  </div>
                  <div className="flex flex-col mb-2">
                    <InputString title='' placeholder = 'Придумайте пароль' name = 'password' setInput = {setPasswordInput}/>
                  </div>
                  <div className="flex w-full my-4">
                  <button className=" w-full px-2 py-1 transition ease-in duration-200 uppercase rounded-full text-red-700 hover:bg-red-600 hover:text-white border-2 border-red-700 focus:outline-none"
                  onClick={() => {setClickReg(prev => prev + 1); checkRegistration()}}>
                    Зарегистрироваться
                  </button>
                  </div>
            <div className={successReg? 'visible' : 'hidden'}>
              <h1 className='text-green-500 text-xm text-center underline'>Регистрация успешна</h1>
            </div>
            <div className={errorReg? 'visible' : 'hidden'}>
              <h1 className='text-red-500 text-xm text-center underline'>Пользователь с таким email уже существует</h1>
            </div>
          </div>
        </div>
      </div>

    </>
    
  )
}