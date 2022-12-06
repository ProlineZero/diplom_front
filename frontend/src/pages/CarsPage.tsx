import React from 'react'
import { Card } from '../components/Card'
import { Navigation } from '../components/Navigation'

export function CarsPage() {
  return (

    <>
      <Navigation numPressedBtn = {0}/>
      <section className="">
      <div className="bg-gray-300 bg-fixed ml-[17%] w-[83%] px-4 py-16">
        {/* <div className=" bg-gray-300  "> */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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