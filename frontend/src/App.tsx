import {Route, Routes} from 'react-router-dom'
import { useEffect } from 'react'
import { RegistrationPage } from './pages/RegistrationPage'
import { AuthorizationPage } from './pages/AuthorizationPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { CarsPage } from './pages/CarsPage'
import { CarPage } from './pages/CarPage'

function App() {

  useEffect(()=>{}, [])

  return (

    <>
      <Routes>
        <Route path="/" element={ <CarsPage/> } />
        <Route path="/authorization" element={ <AuthorizationPage/> } />
        <Route path="/registration" element={ <RegistrationPage/> } />
        <Route path="/favorites" element={ <FavoritesPage/> } />
        <Route path= "/cars/:id" element = {<CarPage/>} />
      </Routes> 
      
    </>
   
    
  )
}

export default App;
