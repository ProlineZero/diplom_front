import React from 'react'
import testSrc from "../icons/test.jpg"
import likeIconSrc from "../icons/like.svg"
import {HandySvg} from "handy-svg"

export function Card() {
  return (
    
    <div className="w-80 p-2 m-6 bg-white shadow-lg rounded-2xl">
      <div className="m-3">
      <img src={testSrc} alt="adidas" className="w-full h-50 rounded-lg"/>
      </div>
        
        <div className="p-4 m-3 bg-red-200 rounded-lg">
            <p className="text-xl font-bold text-red-500 ">
                Два ведра 
            </p> 
            <p className="text-xs text-red-500">
                ЯпоRussia (я параша)
            </p>
            <div className="flex items-center justify-between ">
                <p className="text-red-500">
                    2002-2022 
                </p>
                <button type="button" className="w-10 h-10 text-base font-medium text-red-400 bg-red-200 rounded-full hover:text-red-700">
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

  )
}