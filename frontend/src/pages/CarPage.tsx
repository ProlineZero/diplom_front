import React, { useState } from "react"
import testSrc from "../icons/test.jpg"
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
      

      <div className="fixed bg-gray-100 w-[70%] h-[80%] left-[58%] -translate-x-1/2 top-[55%] -translate-y-1/2 rounded-3xl border-l-2 border-r-2 border-red-600 shadow-2xl shadow-black/50">



      <div className='absolute grid gap-2 grid-cols-1 grid-rows-2 w-1/2 h-full '>

      <div className="block mx-12 mt-6 ">
        <div className="fixed w-[40%] h-1/2" onClick={() => setModal(true)}>
          <img src={testSrc} className="relative w-full h-full rounded-xl" style ={{objectFit: 'cover'}} />
        </div>
      </div>
      <div className="block mt-10 text-xl font-medium text-left ml-12">
        <h1>Brand Model Generation</h1>
        <h1 className="mt-2">Country</h1>
        <h1 className="mt-2">XXXX - XXXX</h1>
      </div>
        
      </div>

      <div className='absolute grid gap-2 grid-cols-2 grid-rows-6 w-1/2 left-1/2 h-full items-center'>

      <div className="block  text-lg font-medium text-left">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-lg font-medium text-left">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-lg font-medium text-left">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-lg font-medium text-left">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-lg font-medium text-left">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-lg font-medium text-left">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-lg font-medium text-left">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-lg font-medium text-left">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-lg font-medium text-left">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-lg font-medium text-left">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-lg font-medium text-left">
        <h1>Parameter: value</h1>
      </div>

      <div className="block  text-lg font-medium text-left">
        <h1>Parameter: value</h1>
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