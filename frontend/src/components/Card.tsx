import React, { useState } from "react"
import testSrc from "../icons/test.jpg"
import likeIconSrc from "../icons/like.svg"
import {HandySvg} from "handy-svg"
import { Modal } from './Modal'
import { ICard} from '../models';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { delay } from "../functions/common"

interface ICardProps {
  data: ICard
}

export function Card({data}: ICardProps) {

  const user = useSelector((state:any) => state.user)

  function set_to_favorites() {
    if (user.id) {
      setPromtAutho(true)
      delay(2000).then(() => setPromtAutho(false))
    } else {
      if (btnLikeStyle == btnNotLiked) {
        setBtnLikeStyle(btnLiked)
      } else {
        setBtnLikeStyle(btnNotLiked)
      }
    }

  }

  const btnLiked = "w-10 h-10 text-base font-medium hover:text-red-100 bg-red-600 rounded-full text-red-400"
  const btnNotLiked = "w-10 h-10 text-base font-medium text-red-100 bg-red-600 rounded-full hover:text-red-400"
  const correctBtnLikeStyle = btnNotLiked

  const [promtAutho, setPromtAutho] = useState(false)
  const [btnLikeStyle, setBtnLikeStyle] = useState(correctBtnLikeStyle)
  

  return (
    <>

    <div className="z-0 w-[90%] h-[90%] p-2 m-6 bg-white hover:shadow-xl shadow-2xl hover:shadow-black/50 shadow-black/50 rounded-2xl"  >
      <div className="m-3">
        <a href = {"cars/"+String(data.id)}>
          <img src={data.pict_url} className="w-full h-50 rounded-lg"/>
        </a>
      </div>
        
        <div className = {promtAutho? 'hidden' : 'visible'}>
          <div className="p-4 m-3 bg-red-600 rounded-lg">
              <div className="h-20">
                <p className="text-lg font-bold text-red-100 leading-tight">
                  {data.name} <br/> {data.engine_capacity} л. {data.engine_power} л.с.
                </p> 
              </div>
              <p className="text-lg text-red-100">
                {data.country_field}
              </p>

              <div className="flex items-center justify-between ">
                  <p className="text-red-100">
                      {data.year_start} - {(data.year_end != null) ? (String(data.year_end)) : 'н.в.'}
                  </p>
                  <button type="button" className={btnLikeStyle}
                  onClick={() => set_to_favorites()}>
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
            <h1 className='text-gray-500 text-xm text-center py-2'>
              <br/>
              <br/>
              <br/>
              Для добавления в избранное необходимо авторизироваться
            </h1>
          </div>
        </div>
    </div >
    
    </>
  )
}