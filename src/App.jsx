import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Events from './components/Events'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import NavigationBar from './components/Navbar'
import EventDetails from './components/EventDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Suspense fallback ={<p>loading ...</p>}>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path ="/events" >
        <Route index element ={<Events/>}/>
        <Route path ="details/:nom" element={< EventDetails/>}/>
      </Route>
        <Route path ="*" element ={<><p>Not found</p></>}/>
       
    </Routes>
    </Suspense>
   
    
     
    </>
  )
}

export default App
