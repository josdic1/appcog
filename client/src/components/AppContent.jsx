import viteLogo from '/vite.svg'
import { useContext } from 'react'
import AuthButton from "./AuthButton"
import DealerContext from '../contexts/DealerContext'
import NavBar from './NavBar'
import { Outlet } from "react-router-dom"

function AppContent() {

    const { currentUser } = useContext(DealerContext)
  
 const showNav = currentUser

   
    return (
      <>
        <header>
          {showNav ? 
          <NavBar /> : ""}
        </header>
        <main>
          <div>
            <img
              src={viteLogo}
              className="logo"
              alt="Vite logo"
              style={{
                filter: currentUser?.dealer_name ? 'none' : 'grayscale(1)'
              }}
            />
          </div>
          <AuthButton />
          <Outlet />
        </main>
      </>
    )
  }

export default AppContent





