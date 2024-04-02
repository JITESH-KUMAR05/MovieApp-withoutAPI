
import './App.css'
import Home from './pages/Home'
import data from './data'
import Details from './pages/Details'
import NotFound from './pages/NotFound'
import { Link , Route , Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:slug' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App; 
