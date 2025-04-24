import BrandProvider from './providers/BrandProvider'
import CrudProvider from './providers/CrudProvider'
import DealerProvider from './providers/DealerProvider'
import LoadModeProvider from './providers/LoadModeProvider'
import TemplateProvider from './providers/TemplateProvider'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
<LoadModeProvider>
  <DealerProvider>
    <BrandProvider>        
      <TemplateProvider>  
        <CrudProvider >
        <header></header>
        <main><Outlet /></main>
        </CrudProvider>   
      </TemplateProvider>
    </BrandProvider>
  </DealerProvider>
</LoadModeProvider>
)}

export default App
