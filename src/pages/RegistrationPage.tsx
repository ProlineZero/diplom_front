import React from 'react'
import { InputString } from '../components/InputString'

export function RegistrationPage() {
  return (
    
    <div className="fixed bg-gray-100 w-5/12 h-1/2 left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/2 rounded-3xl">
      <div className="container w-1/2 space-y-3 fixed inline-block text-left left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <h2 className="text-3xl text-center text-purple-500">Online Books</h2>
        <h1 className='text-2xl text-center text-gray-500'>Регистрация</h1>
        <div className="w-full">
                <div className="flex gap-4 mb-2">
                  <InputString title='' placeholder = 'Имя' name = 'firstname' />
                   <InputString title='' placeholder = 'Фамилия' name = 'lastname' />
                </div>
                <div className="flex flex-col mb-2">
                  <InputString title='' placeholder = 'E-mail' name = 'email' />
                </div>
                <div className="flex flex-col mb-2">
                  <InputString title='' placeholder = 'Придумайте пароль' name = 'password' />
                </div>
                <div className="flex w-full my-4">
                <button className=" w-full px-2 py-1 transition ease-in duration-200 uppercase rounded-full text-purple-700 hover:bg-purple-600 hover:text-white border-2 border-purple-700 focus:outline-none">
                  Зарегистрироваться
                </button>
                </div>
        </div>
      </div>
    </div>
    
  )
}