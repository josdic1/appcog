import NavBar from './components/NavBar'
import BrandProvider from './providers/BrandProvider'
import DealerProvider from './providers/DealerProvider'
import LoadModeProvider from './providers/LoadModeProvider'
import { Outlet } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
  <LoadModeProvider>
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
      </LoadModeProvider>
      
    </>
  )
}

export default App
