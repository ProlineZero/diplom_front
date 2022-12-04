import React from 'react'
import testSrc from "../icons/test.jpg"
import likeIconSrc from "../icons/like.svg"
import {HandySvg} from "handy-svg"

export function Card() {
  return (
    
    <div className="w-64 p-2 m-auto bg-white shadow-lg rounded-2xl">
        <img src={testSrc} alt="adidas" className="w-full p-4 m-auto h-36"/>
        <div className="p-4 m-3 bg-indigo-200 rounded-lg">
            <p className="text-xl font-bold text-indigo-500 ">
                Два ведра 
            </p> 
            <p className="text-xs text-indigo-500">
                ЯпоRussia (я параша)
            </p>
            <div className="flex items-center justify-between ">
                <p className="text-indigo-500">
                    2002-2022 
                </p>
                <button type="button" className="w-10 h-10 text-base font-medium text-indigo-400 bg-indigo-200 rounded-full hover:text-red-700">
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