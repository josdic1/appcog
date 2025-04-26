import { NavLink } from "react-router-dom"




function NavBar() {
  return (
    <nav>
      <NavLink to="/home">Dashboard</NavLink>
      <NavLink to="/offerlist">Offers</NavLink>
      <NavLink to="/dealerlist">Dealers</NavLink>
      <NavLink to='/'>Cancel</NavLink>


    </nav>
  )
}


export default NavBar
