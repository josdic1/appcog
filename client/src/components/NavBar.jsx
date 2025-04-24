import { NavLink } from "react-router-dom"
import AuthButton from "./AuthButton"

function NavBar() {
  return (
    <nav>
      <NavLink to="/home">Dashboard</NavLink>
      <AuthButton />
    </nav>
  )
}

export default NavBar
