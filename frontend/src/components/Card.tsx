import React, { useState } from "react"
import testSrc from "../icons/test.jpg"
import likeIconSrc from "../icons/like.svg"
import {HandySvg} from "handy-svg"
import { Modal } from './Modal'
import { ICard} from '../models';
import {Link} from 'react-router-dom'

interface ICardProps {
  data: ICard
}

export function Card({data}: ICardProps) {


  function set_to_favorites() {


  }

  return (
    <>

    <div className="w-[90%] h-[90%] p-2 m-6 bg-white hover:shadow-xl shadow-2xl hover:shadow-black/50 shadow-black/50 rounded-2xl"  >
      <div className="m-3">
        <a href = {"cars/"+String(data.id)}>
          <img src={data.pict_url} className="w-full h-50 rounded-lg"/>
        </a>
      </div>
        
        <div className="p-4 m-3 bg-red-600 rounded-lg">
            <div className="h-14">
            <p className="text-lg font-bold text-red-100 ">
                {data.name} {data.engine_capacity} л. {data.engine_power} л.с.
            </p> 
            </div>
            <p className="text-lg text-red-100">
              {data.country_field}
            </p>
            {/* <p className="text-red-100">
              {data.engine_capacity} л. {data.engine_power} л.с.
            </p> */}
            <p className="text-xs text-red-100">
              {data.engine_type}
            </p>
            <p className="text-xs text-red-100">
              {data.transmission_type} КПП
            </p>

            <div className="flex items-center justify-between ">
                <p className="text-red-100">
                    {data.year_start} - {data.year_end} 
                </p>
                <button type="button" className="w-10 h-10 text-base font-medium text-red-100 bg-red-600 rounded-full hover:text-red-400"
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
    </>
  )
}