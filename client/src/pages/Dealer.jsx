import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import DealerContext from "../contexts/DealerContext"

function Dealer() {
    const { id } = useParams()

    const { dealers } = useContext(DealerContext)
        
    const [ clickedDealer, setClickedDealer] = useState({})

    useEffect(() => {
        const found = dealers.find(o => o.id === id)
        if(found) setClickedDealer(found)
    },[id, dealers])

return (
<>
<h3>{id}</h3>
<h5>{clickedDealer.dealer_name}</h5>
<h5>{clickedDealer.owner}</h5>
<h5>{clickedDealer.email}</h5>
<h5>{clickedDealer.usercode}</h5>
<h5>{clickedDealer.passcode}</h5>
<h6>{clickedDealer.brands?.join(" * ")}</h6>
</>
)}

export default Dealer
