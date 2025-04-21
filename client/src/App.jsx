import NavBar from './components/NavBar'
import BrandProvider from './providers/BrandProvider'
import DealerProvider from './providers/DealerProvider'
import { Outlet } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>

    <DealerProvider>
    <BrandProvider>
    <header>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <NavBar />
      </header>
    <main>
      <Outlet />
      </main>
      </BrandProvider>
      </DealerProvider>
   
      
    </>
  )
}

export default App
