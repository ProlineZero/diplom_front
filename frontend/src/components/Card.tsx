import React, { useEffect, useState } from "react"
import likeIconSrc from "../icons/like.svg"
import {HandySvg} from "handy-svg"
import { ICard} from '../models';
import { delay } from "../functions/common"
import axios from "axios"

interface ICardProps {
  data: ICard
}

export function Card({data}: ICardProps) {

  const [isLiked, setIsLiked] = useState(false)
  async function checkIsLiked() {
    if (localStorage.getItem('jwt')){
      const response = await axios.post<{success:boolean}>('http://192.168.1.11/api/is-car-in-favorites/', {user_jwt: localStorage.getItem('jwt'), car_id: data.id})
      setIsLiked(response.data.success)
    }
  }

  useEffect(() => {
    checkIsLiked()
  }, [isLiked])

  function set_to_favorites( btnLikeStyle: string) {
    if (localStorage.getItem('jwt')) {
      if (btnLikeStyle == btnNotLiked) {
        setIsLiked(true)
        axios.post('http://192.168.1.11/api/add-to-favorites/', {user_jwt: localStorage.getItem('jwt'), car_id: data.id})
      } else {

       setIsLiked(false)
        axios.post('http://192.168.1.11/api/delete-from-favorites/', {user_jwt: localStorage.getItem('jwt'), car_id: data.id})
      }
    } else {
      setPromtAutho(true)
      delay(2000).then(() => setPromtAutho(false))
    }
  }

  const btnLiked = "w-10 h-10 text-base font-medium bg-green-600 rounded-full text-green-400"
  const btnNotLiked = "w-10 h-10 text-base font-medium text-green-100 bg-green-600 rounded-full "
  const [promtAutho, setPromtAutho] = useState(false)

  return (
    <>
      <div className="z-0 w-[90%] h-[90%] p-2 m-6 bg-white hover:shadow-xl shadow-2xl hover:shadow-black/50 shadow-black/50 rounded-2xl"  >
        <div className="m-3">
          <a href = {"cars/"+String(data.id)}>
            <img src={data.pict_url} className="w-full h-50 rounded-lg"/>
          </a>
        </div>
          
          <div className = {promtAutho? 'hidden' : 'visible'}>
            <div className="p-4 m-3 bg-green-600 rounded-lg">
                <div className="h-20">
                  <p className="text-lg font-bold text-green-100 leading-tight">
                    {data.name} <br/> {data.engine_capacity != null ? data.engine_capacity + " л." : "" } {data.engine_power != null ? data.engine_power + " л.c." : "" }
                  </p> 
                </div>
                <p className="text-lg text-green-100">
                  {data.country_field}
                </p>

                <div className="flex items-center justify-between ">
                  <p className="text-green-100">
                    {data.year_start} - {(data.year_end != null) ? (String(data.year_end)) : 'н.в.'}
                  </p>
                  <button type="button" className={isLiked? btnLiked : btnNotLiked}
                  onClick={() => set_to_favorites(isLiked? btnLiked : btnNotLiked) }>
                    <HandySvg
                      src={likeIconSrc}
                      className="m-auto"
                      width="25"
                      height="25"
                      fill="currentColor"/>
                  </button>
                  
                </div>
            </div>
          </div>
          <div className = {promtAutho? 'visible' : 'hidden'}>
            <div className=" p-4 m-3 bg-white shadow-2xl shadow-black/50 rounded-2xl">
              <h1 className='text-gray-600 text-xm text-center py-2'>
                Для добавления в избранное необходимо авторизироваться
              </h1>
            </div>
          </div>
      </div >
    </>
  )
}