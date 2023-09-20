import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar'
import Register from './components/Register'
import Login from './components/Login'

function App(e) {
  // const [count, setCount] = useState(0)

  const logOnchange = (e) => {
    console.log(e.target.value)
  }
  
  return (
    <>
      <div className="">
        <NavBar />
        
        <Routes>
          
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
        </Routes>

      </div>
    </>
    
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  )
}

export default App
