import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card'
import { Navigation } from '../components/Navigation'
import { ICard} from '../models';


export function CarsPage() {

  const [cards, setCards] = useState<ICard[]>([])

  function addCard(product: ICard) {
    setCards(prev => [...prev, product])
  }

  async function fetchCars() {

    const response = await axios.get<ICard[]>('https://carguider.ru/api/sergay-loh/')
    setCards(response.data)

  }

  useEffect(() => {
    fetchCars()
  }, [])
  
  // console.log(cards)

  return (

    <>

      <Navigation numPressedBtn = {0}/>
      
      <div className=" bg-fixed ml-[170px] sm:ml-[17%] w-[83%] px-4 py-16">
        {/* <div className=" bg-gray-300  "> */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ">
            {cards.map(card => <Card data={card}/>)}
          </div>
        </div>
      

    </>
    
  )
}