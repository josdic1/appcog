import { useState, useEffect } from "react"
import LoadModeContext from "../contexts/LoadModeContext"


function LoadModeProvider({children}) {



    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ inEditMode, setInEditMode ] = useState(false)


    useEffect(() => {

        
    },[])
    
return (
<>
<LoadModeContext.Provider
    value={{ isLoaded, setIsLoaded, inEditMode, setInEditMode }}
>
    {children}
</LoadModeContext.Provider>
</>
)}

export default LoadModeProvider
