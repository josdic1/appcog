import BrandProvider from './providers/BrandProvider'
import CrudProvider from './providers/CrudProvider'
import DealerProvider from './providers/DealerProvider'
import LoadModeProvider from './providers/LoadModeProvider'
import TemplateProvider from './providers/TemplateProvider'
import AppContent from './components/AppContent.jsx'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
<LoadModeProvider>
  <DealerProvider>
    <BrandProvider>
      <CrudProvider> 
        <TemplateProvider>
          <div>
            <header><AppContent /></header>
            <main>
              <Outlet />
            </main>
          </div>
        </TemplateProvider>
      </CrudProvider>
    </BrandProvider>
  </DealerProvider>
</LoadModeProvider>
  )
}

export default App
