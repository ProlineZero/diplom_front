import React from 'react'
import {IItem} from '../models'
import { MyCombobox } from './MyCombobox'




const people: IItem[] = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
]

const cars: IItem[] = [
  { id: 1, name: 'Lada' },
  { id: 2, name: 'Mazda' },
  { id: 3, name: 'BMW' },
  { id: 4, name: 'Honda' },
  { id: 5, name: 'Toyota' },
  { id: 7, name: 'Subaru' },
  { id: 8, name: 'Subaru' },
  { id: 9, name: 'Subaru' },
  { id: 10, name: 'Subaru' },
  { id: 11, name: 'Subaru' },
  { id: 12, name: 'Subaru' },
  { id: 13, name: 'Subaru' },
  { id: 14, name: 'Subaru' },
  { id: 15, name: 'Subaru' },
  { id: 16, name: 'Subaru' },
  { id: 17, name: 'Subaru' },
  { id: 18, name: 'Subaru' },
]

export function Filters() {
  
  return (
    <>
      <div className="fixed top-[15%] left-1/2 -translate-x-1/2 bg-white w-[40%] h-1/2 rounded-2xl">
        <div className="flex flex-col">
          <div className='inline'>
            <MyCombobox list = {people}/>
          </div>
          <div className='inline mt-16'>
            <MyCombobox list = {cars}/> 
          </div>
        </div>
        </div>
    </>




  )
}
