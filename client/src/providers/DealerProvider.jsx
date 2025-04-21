import { useState, useEffect } from "react"
import DealerContext from "../contexts/DealerContext"

function DealerProvider({children}) {
    const [ dealers, setDealers ] = useState([])

    useEffect(() => {
        fetchDealers()
    },[])

    async function fetchDealers() {
        try{
            const r = await fetch(`http://localhost:3000/dealers`)
            if(!r.ok){
                throw new Error("💥 Error");
            }
            const data = await r.json()
            setDealers(data)
        }catch (error) {console.error("❌ Caught error:", error);}
    }

    return (
    <>
    <DealerContext.Provider
    value={{ dealers }}
    >
        {children}
    </DealerContext.Provider>
    </>
    )}

    export default DealerProvider
