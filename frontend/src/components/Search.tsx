import React, { useState } from "react"
import { Filters } from "./Filters"
import { Modal } from './Modal'

export function Search() {
  const  [modal, setModal] = useState(false)
  const [inputData, setInputData] = useState('')


  // console.log(inputData)

  return (
    <>
    
    <div className="relative z-10 flex flex-col justify-center h-full px-3 mx-auto flex-center">
      <div className="relative flex items-center w-full pl-1 ">
        <div className="container relative left-0 z-50 flex w-3/4 l">
          <div className="relative flex items-center w-full h-full ">
            <div className="absolute z-50  items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
              <svg fill="none" className="relative w-5 h-5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                </path>
              </svg>
            </div>
            <svg className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
              </path>
            </svg>
            <input type="text" className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-200 ring-opacity-90 bg-gray-100 text-gray-400 aa-input"
            placeholder="Поиск"
            onChange={(event) => setInputData(event.target.value)}
            />
            <button className="absolute right-0 h-auto px-2 py-0 mr-2 text-base text-red-600 border border-red-500 rounded-xl hover:bg-red-100"
            onClick={() => setModal(true)}>
              +
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
        </div>
      </div>
    </div>

    
    <div className={modal? 'visible' : 'hidden'}>
    <Modal onClose={() => {setModal(false)}}>
      <div className = 'fixed z-20'>
        <Filters searchInputData= {inputData}/>
      </div>
    </Modal>
    </div>
    

    </>
  )
}