import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios'
import { Card } from '../components/Card'
import { Navigation } from '../components/Navigation'
import { ICard, IProduct } from '../models';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { Loading } from '../components/Loading';

export function FavoritesPage() {

  const lim = 20
  const [favCards, setFavCards] = useState<ICard[]>([])
  const [fetching, setFetching] = useState(false)

  const [loading, setLoading] = useState(false)
  const [notFounded, setNotFounded] = useState(false)
  const [cardsIsVisible, setCardsIsVisible] = useState(true)

  const dispatch = useDispatch()

  const filters = useSelector((state:any) => state.filters)
  
  const fetchCarsOffset = useSelector((state:any) => state.fetchCarsOffset)


  

  async function fetchCars(offset:number = 0) {

      if (localStorage.getItem('jwt')) {
        try {
        setNotFounded(false)
        setCardsIsVisible(false)
        setLoading(true)
        const response = await axios.post<ICard[]>('https://carguider.ru/api/get-favorites/', {user_jwt: localStorage.getItem('jwt')}).finally(() => setFetching(false))
        const cardsInState = (offset == 0) ? [] : [...favCards]
        setFavCards(cardsInState.concat(response.data))
        setLoading(false)
        setCardsIsVisible(true)
        if (response.data.length == 0) {
          setNotFounded(true)
        } else {
          setNotFounded(false)
        }
        
        } catch (e: unknown) {
          const error = e as AxiosError
          console.log(error.message)
        } 
      }

  }

  useEffect(() => {
      fetchCars(fetchCarsOffset)
  }, [])


  return (

    <>
      <Navigation numPressedBtn = {1} searchIsVisible = {false}/>
      <section className="">
      <div className=" bg-fixed ml-[170px] sm:ml-[17%] w-[83%] px-4 py-16">
          {notFounded && <div className=' fixed left-[60%] -translate-x-1/2 top-1/2 -translate-y-1/2'>
            <h1 className = 'text-2xl text-gray-600'>Список избранного пуст</h1>
          </div>}
          {!localStorage.getItem('jwt') && <div className=' fixed left-[60%] -translate-x-1/2 top-1/2 -translate-y-1/2'>
            <h1 className = 'text-2xl text-gray-600'>Необходимо авторизоваться</h1>
          </div>}
          {cardsIsVisible && localStorage.getItem('jwt') && <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ">
            {favCards.map(card => <Card data={card}/>)}
          </div>}
          {loading && <Loading/>}
        </div>
      </section>

    </>
    
  )
}