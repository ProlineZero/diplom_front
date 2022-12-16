import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { Card } from '../components/Card'
import { Loading } from '../components/Loading';
import { Navigation } from '../components/Navigation'
import { ICard, IFilters} from '../models';


export function CarsPage() {

  const lim = 20
  const [cards, setCards] = useState<ICard[]>([])
  const [fetching, setFetching] = useState(false)

  const [loading, setLoading] = useState(false)
  const [notFounded, setNotFounded] = useState(false)
  const [cardsIsVisible, setCardsIsVisible] = useState(true)


  const dispatch = useDispatch()

  const filters =  useSelector((state:any) => state.filters)
  const fetchCarsOffset = useSelector((state:any) => state.fetchCarsOffset)

  // console.log('JWT: ', localStorage.getItem('jwt'))

  
  

  async function fetchCars(offset:number = 0) {

      console.log('Refetching cars')
      console.log('Filters: ',filters, 'offset: ', fetchCarsOffset)
      try {
      setNotFounded(false)
      if(offset == 0) {
        setCardsIsVisible(false)
        setLoading(true)
      }
      const response = await axios.post<ICard[]>('https://carguider.ru/api/get-cars-list/', {...filters, limit: 20, offset: offset}).finally(() => setFetching(false))
      console.log('Response: ', response)
      const cardsInState = (offset == 0) ? [] : [...cards]
      setCards(cardsInState.concat(response.data))
      setLoading(false)
      setCardsIsVisible(true)
      if (response.data.length == 0 && offset == 0) {
        setNotFounded(true)
      } else {
        setNotFounded(false)
      }
      
      } catch (error) {
        console.log('error')
      } finally {
        setFetching(false)
        dispatch({type:"set/fetchCarsOffset", payload: (offset == 0)? 20 : cards.length})
      }

  }

  useEffect(() => {

      fetchCars(fetchCarsOffset)

  }, [filters, fetching])

  useEffect(()=> {
    document.addEventListener('scroll', scrollHandler)
    return function() {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (event:any) => {
    if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 200) {
      // console.log('EndPage')
      setFetching(true)
    }
  }
  


  return (

    <>

      <Navigation numPressedBtn = {0}/>
      
      <div className=" bg-fixed ml-[170px] sm:ml-[17%] w-[83%] px-4 py-16">
          
          {notFounded && <div className=' fixed left-[60%] -translate-x-1/2 top-1/2 -translate-y-1/2'>
            <h1 className = 'text-2xl text-gray-600'>Ничего не найдено</h1>
          </div>}
          {cardsIsVisible && <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ">
            {cards.map(card => <Card data={card}/>)}
          </div>}
          {loading && <Loading/>}
        </div>
      

    </>
    
  )
}