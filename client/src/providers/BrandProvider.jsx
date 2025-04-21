
import { useState } from "react"
import BrandContext from "../contexts/BrandContext"

function BrandProvider({children}) {

    const [ brands, setBrands ] = useState([])

    return (
    <>
    <BrandContext.Provider
    value={{ brands }}
    >
        {children}
    </BrandContext.Provider>
    </>
    )}

    export default BrandProvider

