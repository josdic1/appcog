import { NavLink } from "react-router-dom"
import AuthButton from "./AuthButton"



function NavBar() {
  return (
    <nav>
      <NavLink to="/home">Dashboard</NavLink>
      <NavLink to="/offersist">Offers</NavLink>
      <NavLink to="/dealerlist">Dealers</NavLink>
      <NavLink to='/'>Cancel</NavLink>
      <AuthButton />

    </nav>
  )
}

export default NavBar
