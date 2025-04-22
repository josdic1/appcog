import { useState, useEffect } from "react"
import LoadModeContext from "../contexts/LoadModeContext"
import DealerContext from "../contexts/DealerContext"

function LoadModeProvider({children}) {



    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ inEditMode, setInEditMode ] = useState(false)


    useEffect(() => {

        
    },[])
    
return (
<>
<LoadModeContext.Provider
    value={{ isLoaded, setIsLoaded }}
>
    {children}
</LoadModeContext.Provider>
</>
)}

export default LoadModeProvider
