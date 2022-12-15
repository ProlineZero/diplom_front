import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Card } from '../components/Card'
import { Navigation } from '../components/Navigation'
import { ICard, IProduct } from '../models';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export function FavoritesPage() {

  const [favCards, setFavCards] = useState<ICard[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)

  const filters = useSelector((state:any) => state.filters)
  console.log(filters)
  

  function addCard(product: ICard) {
    setFavCards(prev => [...prev, product])
  }

  async function fetchCars() {

    console.log('fetching')
    const response = await axios.get<ICard[]>('https://carguider.ru/api/sergay-loh/').finally(() => setFetching(false))
    // setCards(favCards => [...favCards, ...response.data])
    setFavCards(response.data)
    setCurrentPage(prev => prev + 1)

  }

  useEffect(() => {
    // if (fetching) {
      fetchCars()
    // }
  }, [])
  console.log(favCards)

  useEffect(()=> {
    document.addEventListener('scroll', scrollHandler)
    return function() {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (event:any) => {
    if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 200)
    // console.log('scrollHeight', event.target.documentElement.scrollHeight)
    // console.log('scrollHeight', event.target.documentElement.scrollTop)
    // console.log('innerHeight', window.innerHeight)
    // console.log('scroll')
    setFetching(true)
  }

  return (

    <>
   
      <Navigation numPressedBtn = {1}/>
      <section className="">
      <div className=" bg-fixed ml-[170px] sm:ml-[17%] w-[83%] px-4 py-16">
        {/* <div className=" bg-gray-300  "> */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ">

            {favCards.map(card => <Card data={card}/>)}
  
          </div>
        </div>
      </section>

    </>
    
  )
}