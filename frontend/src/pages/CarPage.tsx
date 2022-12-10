import React, { useState } from "react"
import testSrc from "../icons/example1.jpg"
import likeIconSrc from "../icons/like.svg"
import {HandySvg} from "handy-svg"
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { ICar, IProduct } from '../models';
import { Navigation } from '../components/Navigation';
import { Modal } from "../components/Modal";



export function CarPage() {

  

  const { id } = useParams()
  
  async function fetchCar(id?: number) {

    const car = await axios.get<ICar[]>('https://online-books.ru/api/cars-list/')
    return car

  }

  async function fetchProduct(id?: number) {

    const car = await axios.get<IProduct>('https://fakestoreapi.com/products/1')
    return car

  }
  

  console.log(fetchCar())
  console.log(fetchProduct())
  console.log(123)

  const  [modal, setModal] = useState(false)

  return (
    <>

      

      
      <Navigation searchIsVisible = {false}/>
      

      <div className="fixed bg-white w-[70%] h-[80%] left-[58%] -translate-x-1/2 top-[55%] -translate-y-1/2 rounded-3xl ">


      <div className= "fixed bg-gray-100 w-full h-[60%] rounded-3xl border-l-2 border-r-2 border-red-600 shadow-2xl shadow-black/50">
      <div className='absolute grid gap-0 grid-cols-2 grid-rows-1 w-full h-full '>

      <div className="block ">
        <div className="fixed w-[50%] h-[60%]" onClick={() => setModal(true)}>
          <img src={testSrc} className="relative w-full h-full rounded-3xl" style ={{objectFit: 'cover'}} />
        </div>
      </div>
      <div className="block text-6xl font-medium text-center object-center">

        <div className="relative left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 p-2">
          <h1>Mitsubishi Lancer Evolution IX</h1>
        </div>

        <div className= "fixed w-[50%] h-[60%] top-0">
          <button className="absolute left-[90%] -translate-x-1/2 top-[90%] -translate-y-1/2 font-medium text-red-300 bg-gray-100 rounded-full hover:text-red-700">
            <HandySvg
                src={likeIconSrc}
                className="m-auto"
                width="40"
                height="40"
                fill="currentColor"/>
          </button>
        </div>

      </div>
        
      </div>
      </div>

      <div className= "fixed bg-gray-100 w-full h-[32%] top-[68%] rounded-3xl border-l-2 border-r-2 border-red-600 shadow-2xl shadow-black/50">
      <div className='absolute grid gap-2 grid-cols-5 grid-rows-4 w-full h-full  items-center p-4'>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-xl font-medium text-center">
        <h1>Parameter: value</h1>
      </div>

      </div> 
      
    </div>
    </div>
      
      {modal && <Modal onClose={() => setModal(false)}>
        <div className="fixed z-20 left-1/2 -translate-x-1/2 top-[50%] -translate-y-1/2 m-4 " >
          <img src={testSrc} className="relative w-full h-full rounded-lg " style ={{objectFit: 'contain', pointerEvents: 'none'}}/>
        </div>
      </Modal>}
      
    </>


  )
}