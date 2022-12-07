import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {HandySvg} from "handy-svg"
import carsIconSrc from "../icons/car.svg"
import likeIconSrc from "../icons/like.svg"
import mainIconSrc from "../icons/main.svg"
import { Search } from './Search'


interface INavigation {
    numPressedBtn: number
  }

export function Navigation({numPressedBtn}: INavigation) {


    const btnOnClassName = "w-full hover:text-red-800 hover:bg-gray-300 flex items-center p-2 my-6 transition-colors duration-200 border-4 shadow rounded-full border-gray-400/50 text-red-800 bg-gray-300 "
    const btnOffClassName = "w-full hover:text-red-800 hover:bg-gray-300 flex items-center p-2 my-6 transition-colors duration-200 rounded-full text-red-800 "


  return (
    
    <>


<div className="bg-red-700 fixed w-full min-h-[5rem] h-[10%] text-right">
    <div className="flex items-center mt-2 ml-5 justify-start">
        <a className="text-red-100">
            <HandySvg
                src={mainIconSrc}
                className="m-auto"
                width="5rem"
                height="5rem"
                fill="currentColor"/>
        </a>
        <span className="text-red-100 ml-4 text-2xl font-bold">
            Car Guide
        </span>
    
    <div className=" items-center ml-[7%] w-[30%] min-w-[17rem]">
        <Search/>
    </div>
    </div>
    <nav >
        <div className="fixed top-[2.2rem] w-full">
            <a className= "hover:bg-red-100 text-red-100 hover:text-red-800 mx-3 px-3 py-1 rounded-full border-2 border-white text-base font-medium" href="/authorization">
                Вход
            </a>


            <a className="hover:bg-red-100 text-red-100 hover:text-red-800 mr-10 px-3 py-1 rounded-full border-2 border-white text-base font-medium" href="/registration">
                Регистрация
            </a>

        </div>
                               
 
    </nav>
</div>

    <div className="fixed rounded-3xl bg-gray-300/70 h-[70%] min-w-[150px] sm:min-w-[200px] top-[20%] w-[17%] sm:w-[17%]">

        <div className="flex flex-col sm:flex-row sm:justify-around">
            <div className="w-full h-full">
                <nav className="mt-10 px-6 ">
                    <a className= {(numPressedBtn == 0) ? btnOnClassName : btnOffClassName} href="\">
                        <HandySvg
                            src={carsIconSrc}
                            className="m-auto"
                            width="20"
                            height="20"
                            fill="currentColor"/>
                        <span className="mx-4 text-lg font-normal">
                            Машины
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
                            Избранное
                        </span>
                        <span className="flex-grow text-right">
                        </span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
    

    </>
  )
}