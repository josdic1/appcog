import { NavLink } from "react-router-dom"
import AuthButton from "./AuthButton"
import CancelButton from "./CancelButton"

function NavBar() {
  return (
    <nav>
      <NavLink to="/home">Dashboard</NavLink>
      <NavLink to="/offerslist">Offers</NavLink>
      <CancelButton />
      <AuthButton />

    </nav>
  )
}

export default NavBar
