

import { NavLink } from "react-router-dom"


function NavBar() {


return (
<>
<nav>

    <NavLink to='home'> Dashboard </NavLink>
    <NavLink to='databrands'> [brands] </NavLink>
    <NavLink to='datadealers'> [dealers] </NavLink>
    <NavLink to='datatemplates'> [templates] </NavLink>
    <NavLink to='datavariables'> [variables] </NavLink>
  
</nav>
</>
)}

export default NavBar
