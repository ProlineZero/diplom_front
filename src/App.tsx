import {Route, Routes} from 'react-router-dom'
import { useEffect } from 'react'
import { RegistrationPage } from './pages/RegistrationPage'
import { MainPage } from './pages/MainPage'

function App() {

  useEffect(()=>{}, [])

  return (

    <>
      
      <Routes>
        <Route path="/" element={ <MainPage/> } />
        <Route path="/registration" element={ <RegistrationPage/> } />
      </Routes> 


    </>
   
    
  )
}

export default App;
