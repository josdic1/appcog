import { useState } from "react"
import LoadModeContext from "../contexts/LoadModeContext"

function LoadModeProvider({children}) {
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ inEditMode, setInEditMode ] = useState(false)
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)
return (
<>
<LoadModeContext.Provider
    value={{}}
>
    {children}
</LoadModeContext.Provider>
</>
)}

export default LoadModeProvider
