// import { configureStore } from '@reduxjs/toolkit'
import { stat } from "fs"
import { createStore } from "redux"
import { Filters } from "./components/Filters"
import { IFilters, emptyItem, IUser} from "./models"

const defaultFilters: IFilters = {
  name: '',
  country: undefined,

  brand: undefined,
  model: undefined,
  generation: undefined,

  engine_type: undefined,
  transmission_type: undefined,
  body_type: undefined,
  drive_type: undefined,

  engine_capacity_from: undefined,
  engine_capacity_to: undefined,
  engine_power_from: undefined,
  engine_power_to: undefined,
  year_start_from: undefined,
  year_start_to: undefined,

  order_by: undefined,
}

const defaultUser: IUser = {
  id: undefined,
  email: undefined,
  password: undefined,
  first_name: undefined,
  last_name: undefined,
}

const defaultState = {
  filters: defaultFilters,
  fetchCarsOffset: 0,
  user: defaultUser
}

function carReducer(state = defaultState, action:any) {
  switch (action.type) {
    case 'filters/set/':
      Object.keys(action.payload).forEach((key) => action.payload[key] = action.payload[key] == -1? undefined : action.payload[key])
      return {... state, filters: action.payload }
    case 'filters/set/search_text':
      return {... state, filters: {... state.filters, name: action.payload}}
    case 'set/fetchCarsOffset':
      return {... state, fetchCarsOffset: action.payload}
    case 'clearFilters':
      return {...state, filters: defaultFilters}
    case 'clearFetchCarsOffset':
      return {...state, fetchCarsOffset: 0}
  
    default:
      return state
  }
}

export const store =  createStore(carReducer)