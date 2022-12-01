import React from 'react'
import { Navigation } from '../components/Navigation'

export function FavoritesPage() {
  return (

    <>
      <Navigation numPressedBtn = {1}/>
      <div className= 'left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 fixed bg-gray-200 h-[200px] w-[200px]'>
        <h1 className='text-center'>Избранное</h1>
      </div>
      
    </>
    
  )
}