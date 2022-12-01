import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {HandySvg} from "handy-svg"
import carsIconSrc from "../icons/car.svg"
import likeIconSrc from "../icons/like.svg"

interface INavigation {
    numPressedBtn: number
  }

export function Navigation({numPressedBtn}: INavigation) {


    const btnOnClassName = "w-full hover:text-purple-800 hover:bg-purple-100 flex items-center p-2 my-6 transition-colors duration-200 border-r-2 border-purple-600  text-purple-800 bg-purple-100 "
    const btnOffClassName = "w-full hover:text-purple-800 hover:bg-purple-100 flex items-center p-2 my-6 transition-colors duration-200 text-purple-500 "


  return (
    
    
    <div className="fixed bg-purple-200 h-full min-w-[200px] w-1/6">

        <div className="flex flex-col sm:flex-row sm:justify-around">
            <div className="w-full h-full">
                <div className="flex items-center justify-start mx-6 mt-10">
                    <img className = ""src="/icons/main.png"/>
                    <span className="text-purple-500  ml-4 text-2xl font-bold">
                        Cars
                    </span>
                </div>
                <nav className="mt-10 px-6 ">
                    <a className= {(numPressedBtn == 0) ? btnOnClassName : btnOffClassName} href="\">
                        <HandySvg
                            src={carsIconSrc}
                            className="m-auto"
                            width="20"
                            height="20"
                            fill="currentColor"/>
                        <span className="mx-4 text-lg font-normal">
                            Cars
                        </span>
                        <span className="flex-grow text-right">
                        </span>
                    </a>
                    <a className= {(numPressedBtn == 1) ? btnOnClassName : btnOffClassName} href="\favorites">
                        <HandySvg
                            src={likeIconSrc}
                            className="m-auto"
                            width="20"
                            height="20"
                            fill="currentColor"/>
                        <span className="mx-4 text-lg font-normal">
                            Favorites
                        </span>
                        <span className="flex-grow text-right">
                        </span>
                    </a>
                </nav>
            </div>
        </div>
    </div>


  )
}