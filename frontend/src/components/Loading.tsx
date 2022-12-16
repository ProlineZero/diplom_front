import { HandySvg } from 'handy-svg'
import React from 'react'
import loadingIconSrc from "../icons/loading.svg"

export function Loading() {

  return (

    <div className='fixed left-[60%] -translate-x-1/2 top-1/2 -translate-y-1/2'>
      <h1 className = 'text-2xl'>Загрузка</h1>
      <br/>
      <HandySvg
        src={loadingIconSrc}
        className="m-auto"
        width="25"
        height="25"
        fill="currentColor"/>
    </div>
    


  )
}