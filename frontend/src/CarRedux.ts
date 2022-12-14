// import { configureStore } from '@reduxjs/toolkit'
import { createStore } from "redux"
import { Filters } from "./components/Filters"
import { IFilters, emptyItem} from "./models"

const defaultFilters: IFilters = {
  brand: emptyItem,
  body: emptyItem,
  startEngineSize: emptyItem,
  endEngineSize: emptyItem,
  model: emptyItem,
  engineType: emptyItem,
  startEnginePower: emptyItem,
  endEnginePower: emptyItem,
  generation: emptyItem,
  driveType: emptyItem,
  startYear: emptyItem,
  endYear: emptyItem,
  country: emptyItem,
  transmission: emptyItem,
  sort: emptyItem,
  searchText: '',
}

const degaultState = {
  filters: defaultFilters
}

function carReducer(state = degaultState, action:any) {
  switch (action.type) {
    case 'filters/set/':
      return {... state, filters: state.filters = action.payload }
    default:
      return state
  }
}

export const store =  createStore(carReducer)