import { useState } from "react"
import DealerContext from "../contexts/DealerContext"

function DealerProvider({children}) {
    const [ dealers, setDealers ] = useState([])

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
