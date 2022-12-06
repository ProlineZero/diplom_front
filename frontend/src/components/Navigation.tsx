import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {HandySvg} from "handy-svg"
import carsIconSrc from "../icons/car.svg"
import likeIconSrc from "../icons/like.svg"
import mainIconSrc from "../icons/main.svg"


interface INavigation {
    numPressedBtn: number
  }

export function Navigation({numPressedBtn}: INavigation) {


    const btnOnClassName = "w-full hover:text-red-800 hover:bg-red-100 flex items-center p-2 my-6 transition-colors duration-200 border-r-2 border-red-600  text-red-800 bg-red-100 "
    const btnOffClassName = "w-full hover:text-red-800 hover:bg-red-100 flex items-center p-2 my-6 transition-colors duration-200 text-red-500 "


  return (
    
    <>

<div className="bg-red-200 fixed w-full min-h-[50px] h-[10%] text-right">
    <nav >
        <div className="fixed top-[4%] w-full">
            <a className= "hover:bg-red-300 text-red-500 hover:text-red-800 mx-3 px-3 py-1 rounded-full border-2 border-red-500 text-base font-medium" href="/authorization">
                Вход
            </a>


            <a className="hover:bg-red-300 text-red-500 hover:text-red-800 mr-10 px-3 py-1 rounded-full border-2 border-red-500 text-base font-medium" href="/registration">
                Регистрация
            </a>

        </div>
                               
 
    </nav>
</div>



    <div className="fixed bg-red-200 h-full min-w-[200px] w-[17%]">

        <div className="flex flex-col sm:flex-row sm:justify-around">
            <div className="w-full h-full">
                <div className="flex items-center justify-start mx-6 mt-10">
                    <a className="text-red-500">
                        <HandySvg
                            src={mainIconSrc}
                            className="m-auto"
                            width="70"
                            height="70"
                            fill="currentColor"/>
                    </a>
                    <span className="text-red-500  ml-4 text-2xl font-bold">
                        Car Guide
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