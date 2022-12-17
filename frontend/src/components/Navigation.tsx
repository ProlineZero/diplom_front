import React from 'react'
import {HandySvg} from "handy-svg"
import carsIconSrc from "../icons/car.svg"
import likeIconSrc from "../icons/like.svg"
import mainIconSrc from "../icons/main.svg"
import { Search } from './Search'

interface INavigation {
    numPressedBtn?: number
    searchIsVisible?: boolean
  }

export function Navigation({numPressedBtn, searchIsVisible = true}: INavigation) {

    const btnOnClassName = "w-full hover:text-red-800 hover:bg-gray-200 flex items-center p-2 my-2 transition-colors duration-200 border-4 shadow rounded-full border-gray-300/80 text-red-800 bg-gray-200 "
    const btnOffClassName = "w-full hover:text-red-800 hover:bg-gray-200 flex items-center p-2 my-2 transition-colors duration-200 rounded-full text-red-800 "

  return (
    
    <>
        <div className="bg-red-700 fixed z-10 w-full min-h-[5rem] h-[10%] text-right">
            <div className="flex items-center mt-2 ml-5 justify-start">
                <a className="text-red-100" href="\">
                    <HandySvg
                        src={mainIconSrc}
                        className="m-auto"
                        width="5rem"
                        height="5rem"
                        fill="currentColor"
                        />
                </a>
                <a className="text-red-100 ml-4 text-2xl font-bold" href="\">
                    Car Guider
                </a>
            
            {searchIsVisible && <div className=" z-20 ml-[7%] w-[30%] min-w-[17rem]">
                <Search/>
            </div>}
            </div>
            <nav >
                <div className="fixed left-[30%] top-[2.2rem] w-[70%] items-center">

                    <a className= "align-middle hover:bg-red-100 text-red-100 hover:text-red-800 mx-4 px-3 py-1 rounded-full border-2 border-white text-base font-medium " href="/authorization">
                        Авторизация
                    </a>
            
            
                    <button className = {localStorage.getItem('jwt')? "visible align-middle hover:bg-red-100 text-red-100 hover:text-red-800 mr-10 px-3 py-1 rounded-full border-2 border-white text-base font-medium" : "hidden align-middle hover:bg-red-100 text-red-100 hover:text-red-800 mr-10 px-3 py-1 rounded-full border-2 border-white text-base font-medium"}
                    onClick = {() => {localStorage.removeItem('jwt'); window.location.reload(); }}>
                        Выход
                    </button>
                
                </div>
                                    
        
            </nav>
        </div>

            <div className="fixed z-0 rounded-r-3xl bg-gray-100/70 h-[70%] min-w-[150px] sm:min-w-[200px] top-[20%] w-[17%] sm:w-[17%] border-r-2 border-red-600 shadow-2xl shadow-black/50">

                <div className="flex flex-row justify-around">
                    <div className="w-full h-full">
                        <nav className="mt-10 px-6 ">
                            <a className= {(numPressedBtn == 0) ? btnOnClassName : btnOffClassName} href="\">
                                <HandySvg
                                    src={carsIconSrc}
                                    className="m-auto"
                                    width="20"
                                    height="20"
                                    fill="currentColor"/>
                                <span className="mx-4 text-lg font-medium">
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
                                <span className="mx-4 text-lg font-medium">
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