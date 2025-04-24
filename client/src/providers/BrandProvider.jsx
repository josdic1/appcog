
import { useState, useEffect, useContext  } from "react"
import BrandContext from "../contexts/BrandContext"
import DealerContext from "../contexts/DealerContext"


function BrandProvider({children}) {
    const { currentUser } = useContext(DealerContext)

    const [ brands, setBrands ] = useState([])
    const [dealerBrands, setDealerBrands] = useState(null)
    const [selectedBrand, setSelectedBrand] = useState("")

    useEffect(() => {
        fetchBrands()
    },[])

    useEffect(() => {
        if (!currentUser || !currentUser.brands) return
        const filtered = brands.filter(b => (
            currentUser.brands.includes(b.name.toLowerCase())
        ))
        setDealerBrands(filtered)
    },[brands, currentUser])

    const onBrandSelectEvent = (name, value) => {
        if(name === "select") {
            setSelectedBrand(value)
        } else {
            setSelectedBrand("")
        }

    }

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
    value={{ brands, dealerBrands, selectedBrand, onBrandSelectEvent }}
    >
        {children}
    </BrandContext.Provider>
    </>
    )}

    export default BrandProvider

