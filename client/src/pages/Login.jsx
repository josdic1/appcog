import { useContext } from "react"

import DealerContext from "../contexts/DealerContext"

function Login() {
    const { loginInfo, onLoginInput, isLoggedIn, onLoginClick, onClearClick} = useContext(DealerContext)




return (
<>
<input type='text' name='username' onChange={onLoginInput} value={loginInfo.username} placeholder='Username...' />
<input type='password' name='password' onChange={onLoginInput} value={loginInfo.password} placeholder='Password...' />
<button type='button' name='login-button' onClick={onLoginClick}>{isLoggedIn ? 'Logout' : 'Login'}</button>
<button type='button' name='clear-button' onClick={onClearClick}>Clear</button>

</>
)}

export default Login
