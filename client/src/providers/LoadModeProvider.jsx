import { useState, useEffect } from "react"
import LoadModeContext from "../contexts/LoadModeContext"


function LoadModeProvider({children}) {



    const [ isLoaded, setIsLoaded ] = useState(false)



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
