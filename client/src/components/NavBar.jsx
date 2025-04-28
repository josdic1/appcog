import { NavLink } from "react-router-dom"
import { useContext } from "react"
import DealerContext from "../contexts/DealerContext"

function NavBar() {
  const dealerCtx = useContext(DealerContext);

  if (!dealerCtx || typeof dealerCtx !== 'object') {
    console.warn("❌ DealerContext is undefined or not an object in NavBar");
    return null;
  }

  const { currentUser, onLogout } = dealerCtx;



  if (!currentUser) return null;



  
  return (
    <nav style={navStyles}>
      <div style={linkGroupStyles}>
      <NavLink to="/home" style={linkStyles}>Home</NavLink>
        <NavLink to="/home" style={linkStyles}>Dashboard</NavLink>
        <NavLink to="/offerlist" style={linkStyles}>Offers</NavLink>
        {currentUser?.user_type !== "dealer" && (
  <NavLink to="/dealerlist" style={linkStyles}>Dealers</NavLink>
)}
  <NavLink to="/home" style={linkStyles}>New Offer</NavLink>


      </div>

      <button onClick={onLogout} style={logoutButtonStyles}>Logout</button>
    </nav>
  )
}

// Inline styles to keep it simple
const navStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  background: "#333",
  borderRadius: "8px",
  marginBottom: "1rem",
}

const linkGroupStyles = {
  display: "flex",
  gap: "1rem",
}

const linkStyles = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
}

const logoutButtonStyles = {
  backgroundColor: "#646cff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "0.5rem 1rem",
  cursor: "pointer",
}

export default NavBar