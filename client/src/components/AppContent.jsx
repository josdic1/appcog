import viteLogo from '/vite.svg'
import { useContext } from 'react'
import LoadModeContext from '../contexts/LoadModeContext'
import DealerContext from '../contexts/DealerContext'
import NavBar from './NavBar'

function AppContent() {
    const { inEditMode } = useContext(LoadModeContext)
    const { currentUser } = useContext(DealerContext)
return (
<>
<header>
<NavBar/>
</header>
<main>
<div>
<img
  src={viteLogo}
  className="logo"
  alt="Vite logo"
  style={{
    filter: currentUser?.dealer_name
      ? 'none'           
      : 'grayscale(1)'    
  }}
/>
{inEditMode && <p className="edit-banner">✏️ Edit Mode Enabled</p>}
</div>
</main>
</>
)}

export default AppContent





