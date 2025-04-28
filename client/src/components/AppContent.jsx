
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
  <div style={{ fontSize: "2.5rem" }}>
    <span style={{
      color: currentUser?.dealer_name ? '#38b000' : 'gray',
      filter: currentUser?.dealer_name ? 'none' : 'grayscale(1)'
    }}>
      C ⚙ G
    </span>
  </div>

{!currentUser && <AuthButton />}
  <Outlet />
</main>
      </>
    )
  }

export default AppContent





