import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import {IItem, IFilters, IMinMax} from '../models'
import { MyCombobox } from './MyCombobox'
import axios from 'axios'
import { rename } from "fs"

// const brands: IItem[] = [
//   { id: 21, name: 'Lada' },
//   { id: 2, name: 'Mazda' },
//   { id: 3, name: 'BMW' },
//   { id: 43, name: 'Honda' },
//   { id: 5, name: 'Toyota' },
//   { id: 7, name: 'Subaru' },
// ]

// const models: IItem[] = [
//   { id: 1, name: 'Модель 1' },
//   { id: 2, name: 'Модель 2' },
//   { id: 3, name: 'Модель 3' },
// ]

// const generations: IItem[] = [
//   { id: 1, name: 'Первое' },
//   { id: 2, name: 'Второе' },
// ]

// const countries: IItem[] = [
//   { id: 1, name: 'Россия' },
//   { id: 2, name: 'Германия' },
//   { id: 3, name: 'Страна рисовозок' },  
// ]

// const bodies: IItem[] = [
//   { id: 1, name: 'Седан' },
//   { id: 2, name: 'Универсал' },
//   { id: 3, name: 'Лифтбек' },

// ]

// const transmissions: IItem[] = [
//   { id: 1, name: 'Механическая' },
//   { id: 2, name: 'Автоматическая' },
//   { id: 3, name: 'Робот' },
// ]

// const engineTypes: IItem[] = [
//   { id: 1, name: 'Бензиновый' },
//   { id: 2, name: 'Роторный' },
// ]

// const driveTypes: IItem[] = [
//   { id: 1, name: 'Передний привод' },
//   { id: 2, name: 'Задний привод' },
//   { id: 3, name: 'Полный привод' },
// ]




const sorting: IItem[] = [
  { id: 1, name: 'По возрастанию мощности' },
  { id: 2, name: 'По убыванию мощности' },
]

const rename_sorting:{[key:string]:string} = {"По возрастанию мощности":"engine_power", 'По убыванию мощности':'-engine_power'}
interface IFiltersProps {
  searchInputData: string
  filtersIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}


export function Filters({searchInputData, filtersIsVisible}: IFiltersProps) {
  
  const [clearAllComboboxes, setClearAllComboboxes] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState(false)

  const engineSizes: IItem[] = []
  const enginePowers: IItem[] = []
  const yearsRelease: IItem[] = []


  //стейты для выбранного значени каждого фильтра
  const [brand, setBrand] = useState<IItem>()
  const [body, setBody] = useState<IItem>()
  const [startEngineSize, setStartEngineSize] = useState<IItem>()
  const [endEngineSize, setEndEngineSize] = useState<IItem>()
  const [model, setModel] = useState<IItem>()
  const [engineType, setEngineType] = useState<IItem>()
  const [startEnginePower, setStartEnginePower] = useState<IItem>()
  const [endEnginePower, setEndEnginePower] = useState<IItem>()
  const [generation, setGeneration] = useState<IItem>()
  const [driveType, setDriveType] = useState<IItem>()
  const [startYear, setStartYear] = useState<IItem>()
  const [endYear, setEndYear] = useState<IItem>()
  const [country, setCountry] = useState<IItem>()
  const [transmission, setTransmission] = useState<IItem>()
  const [sort, setSort] = useState<IItem>()

  //стейты для запросов возможных значений фильтров
  const [brands, setBrands] = useState<IItem[]>([])
  const [bodies, setBodies] = useState<IItem[]>([])
  const [models, setModels] = useState<IItem[]>([])
  const [engineTypes, setEngineTypes] = useState<IItem[]>([])
  const [generations, setGenerations] = useState<IItem[]>([])
  const [driveTypes, setDriveTypes] = useState<IItem[]>([])
  const [countries, setCountries] = useState<IItem[]>([])
  const [transmissions, setTransmissions] = useState<IItem[]>([])
  const [engineSizeMinMax, setEngineSizeMinMax] = useState<IMinMax>()
  const [enginePowerMinMax, setEnginePowerMinMax] = useState<IMinMax>()
  const [yearMinMax, setYearMinMax] = useState<IMinMax>()
  const [sizes, setSizes] = useState<IItem[]>([])
  const [powers, setPowers] = useState<IItem[]>([])
  const [years, setYears] = useState<IItem[]>([])

  
  async function fetchBrands() {
    // const response: AxiosResponse<IItem[], any> 
    if (country && country.id != -1) {
      const response1 = await axios.get<IItem[]>(`https://carguider.ru/api/get-brands/${country.id}/`)
      setBrands(response1.data)
    } else {
      const response2 = await axios.get<IItem[]>('https://carguider.ru/api/get-all-brands/')
      setBrands(response2.data)
    }
  }

  useEffect(() => {
    fetchBrands()
  }, [])
  useEffect(() => {
    fetchBrands()
  }, [country])



  async function fetchBodies() {
    const response = await axios.get<IItem[]>('https://carguider.ru/api/get-all-body-types/')
    setBodies(response.data)
  }

  useEffect(() => {
    fetchBodies()
  }, [])


  async function fetchModels() {
    if (brand && brand.id != -1) {
      const response = await axios.get<IItem[]>(`https://carguider.ru/api/get-models/${brand.id}/`)
      setModels(response.data)
    }
  }

  useEffect(() => {
    fetchModels()
  }, [brand])


  async function fetchEngineTypes() {
    const response = await axios.get<IItem[]>('https://carguider.ru/api/get-all-engine-types/')
    setEngineTypes(response.data)
  }

  useEffect(() => {
    fetchEngineTypes()
  }, [])


  async function fetchDriveTypes() {
    const response = await axios.get<IItem[]>('https://carguider.ru/api/get-all-drive-types/')
    setDriveTypes(response.data)
  }

  useEffect(() => {
    fetchDriveTypes()
  }, [])


  async function fetchGenerations() {
    if (model && model.id != -1 ) {
      const response = await axios.get<IItem[]>(`https://carguider.ru/api/get-generations/${model.id}/`)
      setGenerations(response.data)
    }
  }

  useEffect(() => {
    fetchGenerations()
  }, [model])

  // console.log(generations)


  async function fetchCountries() {
    const response = await axios.get<IItem[]>('https://carguider.ru/api/get-countries/')
    setCountries(response.data)
  }

  useEffect(() => {
    fetchCountries()
  }, [])


  async function fetchTransmissions() {
    const response = await axios.get<IItem[]>('https://carguider.ru/api/get-all-transmission-types/')
    setTransmissions(response.data)
  }

  useEffect(() => {
    fetchTransmissions()
  }, [])


  async function fetchEngineSizeMinMax() {
    const response = await axios.get<IMinMax>('https://carguider.ru/api/get-engine-capacity-info/')
    setEngineSizeMinMax(response.data)
  }
  
  useEffect(() => {
    fetchEngineSizeMinMax()
  }, [])
  




  async function fetchEnginePowerMinMax() {
    const response = await axios.get<IMinMax>('https://carguider.ru/api/get-engine-power-info/')
    ///сюда вставаить цикл
    setEnginePowerMinMax(response.data)
  }
  
  useEffect(() => {
    fetchEnginePowerMinMax()
  }, [])
  
  

  async function fetchYearMinMax() {
    const response = await axios.get<IMinMax>('https://carguider.ru/api/get-year-start-info/')
    setYearMinMax(response.data)
    
  }

  useEffect(() => {
    fetchYearMinMax()
  }, [])

  useEffect(() => {
    console.log('engineSizeMinMax:', engineSizeMinMax)
    if (engineSizeMinMax) 
    for (let i = engineSizeMinMax.min, id = 0; i <= engineSizeMinMax.max; i += 0.1, id++) {
      engineSizes.push({id, name: String(i.toFixed(1))})
    }
    if(engineSizes.length > 0)
      setSizes(engineSizes)

    if (enginePowerMinMax) {
      enginePowers.push({id:0, name: String(enginePowerMinMax.min)})
      for (let i = enginePowerMinMax.min + 8, id = 1; i <= enginePowerMinMax.max; i += 10, id++) {
        enginePowers.push({id, name: String(i)})
      }
    }
    if(enginePowers.length > 0)
      setPowers(enginePowers)

    if (yearMinMax) 
      for (let i = yearMinMax.max, id = 0; i >= yearMinMax.min; i--, id++) {
        yearsRelease.push({id, name: String(i)})
      }
      if(yearsRelease.length > 0)
        setYears(yearsRelease)

  }, [yearMinMax])

    

  
  // console.log(rename_sorting[rename_sorting.findIndex((element) => element.name == sort.name)].rename)

  // console.log(startYear.name, 'search: ', searchInputData)

  const filters:IFilters = {
    name: searchInputData,
    country: country?.id,

    brand: brand?.id,
    model: model?.id,
    generation: generation?.id,

    engine_type: engineType?.id,
    transmission_type: transmission?.id,
    body_type: body?.id,
    drive_type: driveType?.id,

    engine_capacity_from: Number(startEngineSize?.name) ? Number(startEngineSize?.name) : undefined,
    engine_capacity_to: Number(endEngineSize?.name) ? Number(endEngineSize?.name) : undefined,
    engine_power_from: Number(startEnginePower?.name) ? Number(startEnginePower?.name) : undefined,
    engine_power_to: Number(endEnginePower?.name) ? Number(endEnginePower?.name) : undefined,
    year_start_from: Number(startYear?.name) ? Number(startYear?.name) : undefined,
    year_start_to: Number(endYear?.name) ? Number(endYear?.name) : undefined,

    order_by: sort ? rename_sorting[sort.name] : undefined

  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type:"filters/set/", payload: filters})
  }, [selectedFilters])



//////////////////////////////////////////////
  

  
  
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
              <MyCombobox list = {sizes} placeholder = "Объем от"
              setItem={setStartEngineSize} clearInput = {clearAllComboboxes} selectedItem = {startEngineSize}/> 
              <MyCombobox list = {sizes} placeholder = "до"
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
              <MyCombobox list = {powers} placeholder = "Мощность от"
              setItem={setStartEnginePower} clearInput = {clearAllComboboxes} selectedItem = {startEnginePower}/> 
              <MyCombobox list = {powers} placeholder = "до"
              setItem={setEndEnginePower} clearInput = {clearAllComboboxes} selectedItem = {endEnginePower}/> 
            </div>
          </div>
          <div className='m-2 z-20'>
            <MyCombobox list = {generations} placeholder = "Поколение" isActive = {generations.length > 1 ? true : false}
            setItem={setGeneration} clearInput = {clearAllComboboxes} selectedItem = {generation}/> 
          </div>
          <div className='m-2 z-20'>
            <MyCombobox list = {transmissions} placeholder = "Трансмиссия"
            setItem={setTransmission} clearInput = {clearAllComboboxes} selectedItem = {transmission}/> 
          </div>
          <div className='m-2 z-20'>
            <div className='flex flex-row'>
              <MyCombobox list = {years} placeholder = "Год от"
              setItem={setStartYear} clearInput = {clearAllComboboxes} selectedItem = {startYear}/> 
              <MyCombobox list = {years} placeholder = "до"
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
              onClick={() => {setSelectedFilters(true); setTimeout(() => setSelectedFilters(false), 200); filtersIsVisible(false); dispatch({type:"clearFetchCarsOffset"}); window.scrollTo(0, 0);}}>
                  Применить
              </button>
              </div>
              <div className = "m-2" >
              <button className= "bg-gray-200 hover:bg-gray-300 text-gray-600 px-3 py-1  rounded-full text-base"
              onClick={() => {setClearAllComboboxes(true); setTimeout(() => setClearAllComboboxes(false), 200); dispatch({type:"clearFilters"});}}>
                  Сбросить
              </button>
              </div>
            </div>
          </div>
          
        </div>
    </>




  )
}
