import NavBar from './components/NavBar'
import BrandProvider from './providers/BrandProvider'
import DealerProvider from './providers/DealerProvider'
import LoadModeProvider from './providers/LoadModeProvider'
import TemplateProvider from './providers/TemplateProvider'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
  <LoadModeProvider>
    <DealerProvider>
    <BrandProvider>
    <TemplateProvider>
    <header>
      <NavBar />
      </header>
    <main>
      <Outlet />
      </main>
     </TemplateProvider>
      </BrandProvider>
      </DealerProvider>
      </LoadModeProvider>
      
    </>
  )
}

export default App
