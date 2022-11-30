import {Route, Routes} from 'react-router-dom'
import { useEffect } from 'react'
import { RegistrationPage } from './pages/RegistrationPage'
import { MainPage } from './pages/MainPage'
import { AuthorizationPage } from './pages/AuthorizationPage'

function App() {

  useEffect(()=>{}, [])

  return (

    <>
      
      <Routes>
        <Route path="/" element={ <MainPage/> } />
        <Route path="/authorization" element={ <AuthorizationPage/> } />
        <Route path="/registration" element={ <RegistrationPage/> } />
      </Routes> 


    </>
   
    
  )
}

export default App;
