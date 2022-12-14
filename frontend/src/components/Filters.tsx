import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import {IItem, emptyItem, IFilters} from '../models'
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

const countries: IItem[] = [
  { id: 1, name: 'Россия' },
  { id: 2, name: 'Германия' },
  { id: 3, name: 'Страна рисовозок' },  
]

const bodies: IItem[] = [
  { id: 1, name: 'Седан' },
  { id: 2, name: 'Универсал' },
  { id: 3, name: 'Лифтбек' },

]

const transmissions: IItem[] = [
  { id: 1, name: 'Механическая' },
  { id: 2, name: 'Автоматическая' },
  { id: 3, name: 'Робот' },
]

const engineTypes: IItem[] = [
  { id: 1, name: 'Бензиновый' },
  { id: 2, name: 'Роторный' },
]

const driveTypes: IItem[] = [
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

interface IFiltersProps {
  searchInputData: string
}


export function Filters({searchInputData}: IFiltersProps) {
  
  const [clearAllComboboxes, setClearAllComboboxes] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState(false)


  const [brand, setBrand] = useState<IItem>(emptyItem)
  const [body, setBody] = useState<IItem>(emptyItem)
  const [startEngineSize, setStartEngineSize] = useState<IItem>(emptyItem)
  const [endEngineSize, setEndEngineSize] = useState<IItem>(emptyItem)
  const [model, setModel] = useState<IItem>(emptyItem)
  const [engineType, setEngineType] = useState<IItem>(emptyItem)
  const [startEnginePower, setStartEnginePower] = useState<IItem>(emptyItem)
  const [endEnginePower, setEndEnginePower] = useState<IItem>(emptyItem)
  const [generation, setGeneration] = useState<IItem>(emptyItem)
  const [driveType, setDriveType] = useState<IItem>(emptyItem)
  const [startYear, setStartYear] = useState<IItem>(emptyItem)
  const [endYear, setEndYear] = useState<IItem>(emptyItem)
  const [country, setCountry] = useState<IItem>(emptyItem)
  const [transmission, setTransmission] = useState<IItem>(emptyItem)
  const [sort, setSort] = useState<IItem>(emptyItem)

  // console.log(startYear.name, 'search: ', searchInputData)

  const filters:IFilters = {
    brand: brand,
    body: body,
    startEngineSize: startEngineSize,
    endEngineSize: endEngineSize,
    model: model,
    engineType: engineType,
    startEnginePower: startEnginePower,
    endEnginePower: endEnginePower,
    generation: generation,
    driveType: driveType,
    startYear: startYear,
    endYear: endYear,
    country: country,
    transmission:transmission,
    sort: sort,
    searchText: searchInputData,
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type:"filters/set/", payload: filters})
}, [selectedFilters])

  
  
  return (
    <>
      <div className="fixed top-[15%] left-1/2 -translate-x-1/2 bg-white w-[50%] h-[40%] min-h-[18rem] rounded-2xl border-l-4 border-r-4 border-red-600">
        
        <div className= "sticky h-[15%] w-full">
          <div className = "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" >
            <h1 className = "text-2xl text-center">Фильтры</h1>
          </div>
        </div>

        <div className="grid h-[70%] gap-2 grid-cols-3 grid-rows-4 items-center mx-4">
          <div className="m-2 z-40">
            <MyCombobox list = {brands} placeholder = "Марка" setItem={setBrand}
            clearInput = {clearAllComboboxes} selectedItem = {brand}/>
          </div>
          <div className='m-2 z-40'>
            <MyCombobox list = {bodies} placeholder = "Кузов" setItem={setBody}
            clearInput = {clearAllComboboxes} selectedItem = {body}/> 
          </div>
          <div className='m-2 z-40'>
            <div className='flex flex-row'>
              <MyCombobox list = {engineSizes} placeholder = "Объем от"
              setItem={setStartEngineSize} clearInput = {clearAllComboboxes} selectedItem = {startEngineSize}/> 
              <MyCombobox list = {engineSizes} placeholder = "до"
              setItem={setEndEngineSize} clearInput = {clearAllComboboxes} selectedItem = {endEngineSize}/> 
            </div>
          </div>
          <div className='m-2 z-30'>
            <MyCombobox list = {models} placeholder = "Модель" isActive = {models.length > 0 ? true : false}
            setItem={setModel} clearInput = {clearAllComboboxes} selectedItem = {model}/> 
          </div>
          <div className='m-2 z-30'>
            <MyCombobox list = {engineTypes} placeholder = "Двигатель"
            setItem={setEngineType} clearInput = {clearAllComboboxes} selectedItem = {engineType}/> 
          </div>
          <div className='m-2 z-30'>
            <div className='flex flex-row'>
              <MyCombobox list = {enginePowers} placeholder = "Мощность от"
              setItem={setStartEnginePower} clearInput = {clearAllComboboxes} selectedItem = {startEnginePower}/> 
              <MyCombobox list = {enginePowers} placeholder = "до"
              setItem={setEndEnginePower} clearInput = {clearAllComboboxes} selectedItem = {endEnginePower}/> 
            </div>
          </div>
          <div className='m-2 z-20'>
            <MyCombobox list = {generations} placeholder = "Поколение" isActive = {generations.length > 0 ? true : false}
            setItem={setGeneration} clearInput = {clearAllComboboxes} selectedItem = {generation}/> 
          </div>
          <div className='m-2 z-20'>
            <MyCombobox list = {transmissions} placeholder = "Трансмиссия"
            setItem={setTransmission} clearInput = {clearAllComboboxes} selectedItem = {transmission}/> 
          </div>
          <div className='m-2 z-20'>
            <div className='flex flex-row'>
              <MyCombobox list = {yearsRelease} placeholder = "Год от"
              setItem={setStartYear} clearInput = {clearAllComboboxes} selectedItem = {startYear}/> 
              <MyCombobox list = {yearsRelease} placeholder = "до"
              setItem={setEndYear} clearInput = {clearAllComboboxes} selectedItem = {endYear}/> 
            </div> 
          </div>
          <div className='m-2 z-10'>
            <MyCombobox list = {countries} placeholder = "Страна"
            setItem={setCountry} clearInput = {clearAllComboboxes} selectedItem = {country}/> 
          </div>
          <div className='m-2 z-10'>
            <MyCombobox list = {driveTypes} placeholder = "Привод"
            setItem={setDriveType} clearInput = {clearAllComboboxes} selectedItem = {driveType}/> 
          </div>
          <div className='m-2 z-10'>
            <MyCombobox list = {sorting} placeholder = "Сортировка"
            setItem={setSort} clearInput = {clearAllComboboxes} selectedItem = {sort}/>
          </div>

        </div>
          <div className= "sticky h-[15%] w-full">
            <div className='flex flex-row-reverse'>
              <div className = "m-2" >
              <button className= "bg-red-600 hover:bg-red-700 text-red-100 px-3 py-1  rounded-full text-base mx-4"
              onClick={() => {setSelectedFilters(true); setTimeout(() => setSelectedFilters(false), 200)}}>
                  Применить
              </button>
              </div>
              <div className = "m-2" >
              <button className= "bg-gray-200 hover:bg-gray-300 text-gray-600 px-3 py-1  rounded-full text-base"
              onClick={() => {setClearAllComboboxes(true); setTimeout(() => setClearAllComboboxes(false), 200); setSelectedFilters(true); setTimeout(() => setSelectedFilters(false), 200)}}>
                  Сбросить
              </button>
              </div>
            </div>
          </div>
          
        </div>
    </>




  )
}
