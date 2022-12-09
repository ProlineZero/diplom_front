export interface IItem {
  id: number
  name: string
  }

export interface ICar {
  id: number
  engine_type: string
  transmission_type: string
  body_type: string
  drive_type: string
  name: string
  popularity: number
  pict_id: number
  engine_capacity: number
  engine_power: number
  kwt_power: number
  year_start: number
  year_end: number
  body_length: number
  body_width: number
  body_height: number
  weight: number
  seats: number
  cylinders_order: string
  cylinders_number: number
  torque: number
  max_speed: number
  time_to_100: number
  front_brakes: string
  back_brakes: string
  generation: number
}

export interface IProduct {
  id?: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}