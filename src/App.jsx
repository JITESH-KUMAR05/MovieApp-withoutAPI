import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import data from './data'
import Details from './pages/Details'
import NotFound from './pages/NotFound'
import { Link , Route , Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home /> */}
    



<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/details' element={<Details />} />
  <Route path='*' element={<NotFound />} />


</Routes>

    </>
  )
}

export default App; 
