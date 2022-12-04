import React from 'react'
import { Card } from '../components/Card'
import { Navigation } from '../components/Navigation'

export function CarsPage() {
  return (

    <>
      <Navigation numPressedBtn = {0}/>
      <section className="">
      {/* <div className="bg-gray-300 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"> */}
        <div className="bg-gray-300 static w-5/6 h-[90%] left-[17%] top-[10%]">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
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