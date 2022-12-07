import React from 'react'
import { Card } from '../components/Card'
import { Navigation } from '../components/Navigation'

export function FavoritesPage() {
  return (

    <>
   
      <Navigation numPressedBtn = {1}/>
      <section className="">
      <div className=" bg-fixed ml-[17%] w-[83%] px-4 py-16">
        {/* <div className=" bg-gray-300  "> */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
  
          </div>
        </div>
      </section>

    </>
    
  )
}