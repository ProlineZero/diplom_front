import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { Card } from '../components/Card'
import { Navigation } from '../components/Navigation'
import { ICard, IFilters} from '../models';


export function CarsPage() {

  const lim = 20
  const [cards, setCards] = useState<ICard[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [fetching, setFetching] = useState(true)
  
  // const [filters, setFilters] = useState<IFilters>()


  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch({type:"filters/set/limit", payload: lim})
  //   dispatch({type:"filters/set/offset", payload: 0})
    
  // }, [])


  
  
  
  

  // function addCard(product: ICard) {
  //   setCards(prev => [...prev, product])
  // }

  


  const filters = useSelector((state:any) => state.filters)
  
  
  
  // console.log('Вызов Selectro для offset+')
  const fetchCarsOffset = useSelector((state:any) => state.fetchCarsOffset)
  // console.log('fetchCarsOffset', fetchCarsOffset)
  console.log('Filters: ',filters, 'offset: ', fetchCarsOffset)
  

  async function fetchCars(offset:number = 0) {

    // console.log('fetching')
    // console.log(filters)
    
    // if (fetching) {
      // console.log('Refetching cars')
      // console.log('offset', offset)
      try {
      // setCurrentPage(prev => prev + 1)
      // setFetching(false)
      // console.log(offset)
      const response = await axios.post<ICard[]>('https://carguider.ru/api/get-cars-list/', {...filters, limit: 20, offset: offset})
      console.log('Response: ', response)
      const cardsInState = (offset == 0) ? [] : [...cards]
      setCards(cardsInState.concat(response.data))
      // dispatch({type:"set/fetchCarsOffset", payload:  20*currentPage})
      
      } catch (error) {
        console.log('error')
      } finally {
        setFetching(false)
        dispatch({type:"set/fetchCarsOffset", payload: cards.length})
      }
    // }

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
    if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100)
      setFetching(true)
    }
  
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