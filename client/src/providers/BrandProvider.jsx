
import { useState, useEffect } from "react"
import BrandContext from "../contexts/BrandContext"

function BrandProvider({children}) {

    const [ brands, setBrands ] = useState([])

    useEffect(() => {
        fetchBrands()
    },[])

    async function fetchBrands() {
        try{
            const r = await fetch(`http://localhost:3000/brands`)
            if(!r.ok){
                throw new Error("💥 Error");
            }
            const data = await r.json()
            setBrands(data)
        }catch (error) {console.error("❌ Caught error:", error);}
    }

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

