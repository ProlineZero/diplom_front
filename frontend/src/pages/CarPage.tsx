import React, { useState, useEffect } from "react"
import testSrc from "../icons/example1.jpg"
import likeIconSrc from "../icons/like.svg"
import documentIconSrc from "../icons/document.svg"
import {HandySvg} from "handy-svg"
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { ICar, IProduct } from '../models';
import { Navigation } from '../components/Navigation';
import { Modal } from "../components/Modal";
import { useSelector } from "react-redux";
import { delay } from "../functions/common";




export function CarPage() {

  const [car, setCar] = useState<ICar>(Object)

  const { id } = useParams()
  
  async function fetchCar() {

    const response = await axios.get<ICar>('https://carguider.ru/api/cars-detail/' + String(id))
    setCar(response.data)

  }

  function getPDF() {

  }


  const user = useSelector((state:any) => state.user)


  const [isLiked, setIsLiked] = useState<boolean>()
  async function checkIsLiked() {
    const response = await axios.post<{success:boolean}>('https://carguider.ru/api/is-car-in-favorites/', {user_jwt: localStorage.getItem('jwt'), car_id: id})
   setIsLiked(response.data.success)
  }

  useEffect(() => {
    checkIsLiked()
  }, [isLiked])

  function set_to_favorites(btnLikeStyle: string) {
    if (localStorage.getItem('jwt')) {
      if (btnLikeStyle == btnNotLiked) {
        setIsLiked(true)
        axios.post('https://carguider.ru/api/add-to-favorites/', {user_jwt: localStorage.getItem('jwt'), car_id: id})
      } else {
        // console.log('ДАДАДА')
        setIsLiked(false)
        axios.post('https://carguider.ru/api/delete-from-favorites/', {user_jwt: localStorage.getItem('jwt'), car_id: id})
      }
    } else {
      setPromtAutho(true)
      delay(2000).then(() => setPromtAutho(false))
    }
  }


  useEffect(() => {
    fetchCar()
  }, [])

  const btnLiked = 'absolute left-[90%] -translate-x-1/2 top-[90%] -translate-y-1/2 font-medium bg-gray-100 rounded-full text-red-700'
  const btnNotLiked = 'absolute left-[90%] -translate-x-1/2 top-[90%] -translate-y-1/2 font-medium text-red-300 bg-gray-100 rounded-full'
  const correctBtnLikeStyle = btnNotLiked

  const  [modal, setModal] = useState(false)
  const [promtAutho, setPromtAutho] = useState(false)
  const [btnLikeStyle, setBtnLikeStyle] = useState(correctBtnLikeStyle)

  
  return (
    <>

      

      
      <Navigation searchIsVisible = {false}/>
      

      <div className="fixed bg-white w-[70%] h-[80%] left-[58%] -translate-x-1/2 top-[55%] -translate-y-1/2 rounded-3xl ">


      <div className= "fixed bg-gray-100 w-full h-[60%] rounded-3xl border-l-2 border-r-2 border-red-600 shadow-xl shadow-black/50">
      <div className='absolute grid gap-0 grid-cols-2 grid-rows-1 w-full h-full '>

      <div className="block ">
        <div className="fixed w-[50%] h-[60%]" onClick={() => setModal(true)}>
          <img src={car.pict_url} className="relative w-full h-full rounded-3xl" style ={{objectFit: 'cover'}} />
        </div>
      </div>
      <div className="block text-6xl font-medium text-center object-center">

        <div className="relative left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 p-2">
          <h1>{car.name}</h1>
        </div>

        <div className= "fixed w-[50%] h-[60%] top-0">
          <button className= {isLiked? btnLiked : btnNotLiked}
          onClick={() => set_to_favorites(isLiked? btnLiked : btnNotLiked)}>
            <HandySvg
                src={likeIconSrc}
                className="m-auto"
                width="40"
                height="40"
                fill="currentColor"/>
          </button>
        
        <button className= "absolute left-[81%] -translate-x-1/2 top-[90%] -translate-y-1/2 font-medium text-gray-400 bg-gray-100 rounded-full hover:text-gray-700"
          onClick={() => getPDF()}>
            <HandySvg
                src={documentIconSrc}
                className="m-auto"
                width="40"
                height="40"
                fill="currentColor"/>
          </button>
        </div>

      
      </div>
        
      </div>
        <div className = {promtAutho? 'visible relative w-[35%] h-[18%] z-10 left-[53%] top-[75%]' : 'hidden relative w-[35%] h-[18%] z-10 left-[55%] top-[70%]'}>
          <div className=" p-1 m-6 bg-white shadow-2xl shadow-black/50 rounded-2xl duration-700">
            <h1 className='text-gray-500 text-xl text-center py-2'>
              Для добавления в избранное необходимо авторизироваться
            </h1>
          </div>
        </div>
      </div>

      <div className= "fixed bg-gray-100 w-full h-[32%] top-[68%] rounded-3xl border-l-2 border-r-2 border-red-600 shadow-xl shadow-black/50">
      <div className='absolute grid gap-y-2 gap-x-3 grid-cols-5 grid-rows-4 w-full h-full  items-center py-4 px-10'>

      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Страна:<br/></small><small>{(car.country != null) ? car.country : 'Отсутствует'}</small>
      </div>

      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Тип двигателя:<br/></small><small>{(car.engine_type != null) ? car.engine_type : 'Отсутствует'}</small>
      </div>

      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>КПП:<br/></small><small>{(car.transmission_type != null) ? car.transmission_type : 'Отсутствует'}</small>
      </div>

      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Кузов:<br/></small><small>{(car.body_type != null) ? car.body_type : 'Отсутствует'}</small>
      </div>

      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Масса:<br/></small><small>{(car.weight != null) ? car.weight : 'Отсутствует'} кг</small>
      </div>

      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Годы выпуска:<br/></small><small>{car.year_start}-{(car.year_end != null) ? (String(car.year_end)) : 'н.в.'}</small>
      </div>

      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Объем двигателя:<br/></small><small>{(car.engine_type != 'Электро' && car.engine_capacity != null) ? (String(car.engine_capacity) + ' л.') : 'Отсутствует'}</small>
      </div>

      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Привод:<br/></small><small>{(car.drive_type != null) ? car.drive_type : 'Отсутствует'}</small>
      </div>
      
      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Длина:<br/></small><small>{(car.body_length != null) ? (car.body_length + ' мм') : 'Отсутствует'}</small>
      </div>
      
      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Кол-во мест:<br/></small><small>{(car.seats != null) ? car.seats : 'Отсутствует'}</small>
      </div>

      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Макс. скорость:<br/></small><small>{(car.max_speed != null) ? car.max_speed : 'Отсутствует'} км\ч</small>
      </div>

      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Мощность двигателя:<br/></small><small>{(car.engine_power != null) ? (car.engine_power + ' л.с.') : 'Отсутствует'} л.с.{(car.kwt_power != null) ? ('/' + String(car.kwt_power) + ' кВт') : ''}</small>
      </div>

      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Расположение цилиндров:<br/></small><small>{(car.engine_type != 'Электро' && car.cylinders_order != null) ? (car.cylinders_order) : 'Отсутствует'}</small>
      </div>

      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Ширина:<br/></small><small>{(car.body_width != null) ? (car.body_width + ' мм') : 'Отсутствует'}</small>
      </div>
      
      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Передние торомза:<br/></small><small>{(car.front_brakes != null) ? car.front_brakes : 'Отсутствует'}</small>
      </div>


      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Разгон от 0 до 100 км\ч:<br/></small><small>{(car.time_to_100 != null) ? (car.time_to_100 + ' с.') : 'Отсутствует'}</small>
      </div>

      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Крутящий момент:<br/></small><small>{car.torque} Н·м</small>
      </div>
      
      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Кол-во цилиндров:<br/></small><small>{(car.engine_type != 'Электро' && car.cylinders_number != null) ? (car.cylinders_number) : 'Отсутствует'}</small>
      </div>

      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Высота:<br/></small><small>{(car.body_height != null) ? (car.body_height + ' мм') : 'Отсутствует'}</small>
      </div>

      <div className="block py-2 text-sm lg:text-base lg:leading-none xl:text-lg 2xl:text-xl 2xl:leading-none xl:leading-none leading-none font-medium text-center border-2 border-t-0 border-l-0 rounded-t-none rounded-l-none rounded-3xl border-red-500/50">
        <small className = 'text-gray-500'>Задние тормоза:<br/></small><small>{(car.back_brakes != null) ? car.back_brakes : 'Отсутствует'}</small>
      </div>

      </div> 
      
    </div>
    </div>
      
      {modal && <Modal onClose={() => setModal(false)}>
        <div className="fixed z-20 left-1/2 -translate-x-1/2 top-[50%] -translate-y-1/2 m-4 " >
          <img src={car.pict_url} className="relative w-full h-full rounded-xl " style ={{objectFit: 'contain', pointerEvents: 'none'}}/>
        </div>
      </Modal>}
      
    </>


  )
}