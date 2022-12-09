import React, { useState } from "react"
import testSrc from "../icons/test3.jpg"
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



      

        <div className="fixed w-[40%] h-1/2 m-3" onClick={() => setModal(true)}>
          <img src={testSrc} className="relative w-full h-full rounded-lg" style ={{objectFit: 'cover'}} />
        </div>


        

      </div>

      {modal && <Modal onClose={() => setModal(false)}>
        <div className="fixed w-[90%] h-[90%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 m-3 " >
          <img src={testSrc} className="relative w-full h-full rounded-lg " style ={{objectFit: 'contain', pointerEvents: 'none'}}/>
        </div>
      </Modal>}
    </>


  )
}