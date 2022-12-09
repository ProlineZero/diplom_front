import React, { useState } from "react"
import testSrc from "../icons/test.jpg"
import likeIconSrc from "../icons/like.svg"
import {HandySvg} from "handy-svg"
import { Modal } from './Modal'

export function Card() {

  const  [modal, setModal] = useState(false)

  return (
    <>
    {/* {modal && <Modal title = "Фильтры" onClose={() => setModal(false)}>
        <ExtendedCard/>
      </Modal>} */}

    <div className="w-[90%] h-[90%] p-2 m-6 bg-white hover:shadow-xl shadow-2xl hover:shadow-black/50 shadow-black/50 rounded-2xl" onClick={() => setModal(true)}>
      <div className="m-3">
      <img src={testSrc} className="w-full h-50 rounded-lg"/>
      </div>
        
        <div className="p-4 m-3 bg-red-600 rounded-lg">
            <p className="text-xl font-bold text-red-100 ">
                Два ведра 
            </p> 
            <p className="text-xs text-red-100">
                ЯпоRussia (я параша)
            </p>
            <div className="flex items-center justify-between ">
                <p className="text-red-100">
                    2002-2022 
                </p>
                <button type="button" className="w-10 h-10 text-base font-medium text-red-400 bg-red-600 rounded-full hover:text-red-100">
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