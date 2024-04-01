import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import data from './data'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className=' text-center text-[2rem] font-bold p-5 '>JK KA Cinema Hall</h1>
    <div className='flex w-[90vw] m-auto flex-wrap p-4 items-center justify-between gap-4'>
    {
      data.map((movie)=>{
        return <Home title={movie.name} desc={movie.plot} image = {movie.poster} />
      })
    }
    </div>
    
    </>
  )
}

export default App;
