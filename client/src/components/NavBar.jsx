import { useContext } from "react"
import { NavLink } from "react-router-dom"
import DealerContext from "../contexts/DealerContext"

function NavBar() {
    const { isLoggedIn, setIsLoggedIn } = useContext(DealerContext)

  

return (
<>
<nav>
<NavLink to='login'>{isLoggedIn ? '' : 'Login'}</NavLink>
    <NavLink to='home'> Dashboard </NavLink>
    <NavLink to='databrands'> [brands] </NavLink>
    <NavLink to='datadealers'> [dealers] </NavLink>
    <NavLink to='datatemplates'> [templates] </NavLink>
    <NavLink to='datavariables'> [variables] </NavLink>
    <NavLink to='login' onClick={() => setIsLoggedIn(false)}>{isLoggedIn ? 'Logout' : ''}</NavLink>
</nav>
</>
)}

export default NavBar
