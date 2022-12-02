import {Route, Routes} from 'react-router-dom'
import { useEffect } from 'react'
import { RegistrationPage } from './pages/RegistrationPage'
import { MainPage } from './pages/MainPage'
import { AuthorizationPage } from './pages/AuthorizationPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { CarsPage } from './pages/CarsPage'

function App() {

  useEffect(()=>{}, [])

  return (

    <>
      
      <Routes>
        <Route path="/" element={ <CarsPage/> } />
        <Route path="/authorization" element={ <AuthorizationPage/> } />
        <Route path="/registration" element={ <RegistrationPage/> } />
        <Route path="/favorites" element={ <FavoritesPage/> } />
      </Routes> 


    </>
   
    
  )
}

export default App;
