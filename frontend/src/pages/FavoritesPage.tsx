import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Card } from '../components/Card'
import { Navigation } from '../components/Navigation'
import { ICard, IProduct } from '../models';

export function FavoritesPage() {

  const [favCards, setFavCards] = useState<ICard[]>([])

  function addCard(product: ICard) {
    setFavCards(prev => [...prev, product])
  }

  async function fetchCars() {

    const response = await axios.get<ICard[]>('https://carguider.ru/api/sergay-loh/')
    setFavCards(response.data)

  }

  useEffect(() => {
    fetchCars()
  }, [])
  // console.log(favCards)

  return (

    <>
   
      <Navigation numPressedBtn = {1}/>
      <section className="">
      <div className=" bg-fixed ml-[17%] sm:ml-[170px] w-[83%] px-4 py-16">
        {/* <div className=" bg-gray-300  "> */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

            {favCards.map(card => <Card data={card}/>)}
  
          </div>
        </div>
      </section>

    </>
    
  )
}