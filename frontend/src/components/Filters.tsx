import React from 'react'
import {IItem} from '../models'
import { MyCombobox } from './MyCombobox'

const brands: IItem[] = [
  { id: 21, name: 'Lada' },
  { id: 2, name: 'Mazda' },
  { id: 3, name: 'BMW' },
  { id: 43, name: 'Honda' },
  { id: 5, name: 'Toyota' },
  { id: 7, name: 'Subaru' },
]

const models: IItem[] = [
  { id: 1, name: 'Модель 1' },
  { id: 2, name: 'Модель 2' },
  { id: 3, name: 'Модель 3' },
]

const generations: IItem[] = [
  { id: 1, name: 'Первое' },
  { id: 2, name: 'Второе' },
]

const bodies: IItem[] = [
  { id: 1, name: 'Седан' },
  { id: 2, name: 'Универсал' },
  { id: 3, name: 'Лифтбек' },

]

const gearboxes: IItem[] = [
  { id: 1, name: 'Механическая' },
  { id: 2, name: 'Автоматическая' },
  { id: 3, name: 'Робот' },
]

const engineTypes: IItem[] = [
  { id: 1, name: 'Бензиновый' },
  { id: 2, name: 'Роторный' },
]

const transmissions: IItem[] = [
  { id: 1, name: 'Передний привод' },
  { id: 2, name: 'Задний привод' },
  { id: 3, name: 'Полный привод' },
]


const engineSizes: IItem[] = []
const minEngineSize = 1.2
const maxEngineSize = 3.0
for (let i = minEngineSize, id = 0; i <= maxEngineSize; i += 0.1, id++) {
  engineSizes.push({id, name: String(i.toFixed(1))+" л"})
}


const enginePowers: IItem[] = []
const minEnginePower = 50
const maxEnginePower = 400
for (let i = minEnginePower, id = 0; i <= maxEnginePower; i += 50, id++) {
  enginePowers.push({id, name: String(i)+" л.с."})
}

const yearsRelease: IItem[] = []
const minYearRelease = 1900
const maxYearRelease = 2022
for (let i = maxYearRelease, id = 0; i >= minYearRelease; i--, id++) {
  yearsRelease.push({id, name: String(i)})
}

const sorting: IItem[] = [
  { id: 1, name: 'По возрастанию мощности' },
  { id: 2, name: 'По убыванию мощности' },
]



export function Filters() {
  
  return (
    <>
      <div className="fixed top-[15%] left-1/2 -translate-x-1/2 bg-white w-[50%] h-[40%] min-h-[18rem] rounded-2xl  border-l-4 border-r-4 border-red-600">
        
        <div className= "sticky h-[15%] w-full">
          <div className = "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" >
            <h1 className = "text-2xl text-center">Фильтры</h1>
          </div>
        </div>

        <div className="grid h-[70%] w-full gap-2 grid-cols-3 grid-rows-4 items-center">
          <div className="m-2 z-30">
            <MyCombobox list = {brands} placeholder = "Марка"/>
          </div>
          <div className='m-2 z-30'>
            <MyCombobox list = {bodies} placeholder = "Кузов"/> 
          </div>
          <div className='m-2 z-30'>
            <div className='flex flex-row'>
              <MyCombobox list = {engineSizes} placeholder = "Объем от"/> 
              <MyCombobox list = {engineSizes} placeholder = "до"/> 
            </div>
          </div>
          <div className='m-2 z-20'>
            <MyCombobox list = {models} placeholder = "Модель" isActive = {models.length > 0 ? true : false}/> 
          </div>
          <div className='m-2 z-20'>
            <MyCombobox list = {engineTypes} placeholder = "Двигатель"/> 
          </div>
          <div className='m-2 z-20'>
            <div className='flex flex-row'>
              <MyCombobox list = {enginePowers} placeholder = "Мощность от"/> 
              <MyCombobox list = {enginePowers} placeholder = "до"/> 
            </div>
          </div>
          <div className='m-2 z-10'>
            <MyCombobox list = {generations} placeholder = "Поколение" isActive = {generations.length > 0 ? true : false}/> 
          </div>
          <div className='m-2 z-10'>
            <MyCombobox list = {gearboxes} placeholder = "Коробка"/> 
          </div>
          <div className='m-2 z-10'>
            <div className='flex flex-row'>
              <MyCombobox list = {yearsRelease} placeholder = "Год от"/> 
              <MyCombobox list = {yearsRelease} placeholder = "до"/> 
            </div> 
          </div>
          <div className='m-2 z-0'>
          </div>
          <div className='m-2 z-0'>
            <MyCombobox list = {transmissions} placeholder = "Трансмиссия"/> 
          </div>
          <div className='m-2 z-0 border-r-2 border-b-2 rounded-lg checked:border-red-600'>
            <MyCombobox list = {sorting} placeholder = "Сортировка"/>
          </div>

        </div>
          <div className= "sticky h-[15%] w-full">
            <div className='flex flex-row-reverse'>
              <div className = "m-2" >
              <button className= "bg-red-600 hover:bg-red-700 text-red-100 px-3 py-1  rounded-full text-base ">
                  Применить
              </button>
              </div>
              <div className = "m-2" >
              <button className= "bg-gray-200 hover:bg-gray-300 text-gray-600 px-3 py-1  rounded-full text-base">
                  Сбросить
              </button>
              </div>
            </div>
          </div>

        </div>
    </>




  )
}
