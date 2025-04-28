import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import CrudContext from "../contexts/CrudContext"
import DealerContext from "../contexts/DealerContext"

function Offer() {

    const { offers } = useContext(CrudContext)


    const [ clickedOffer, setClickedOffer] = useState({})
    
    const { id } = useParams()

    useEffect(() => {
        const found = offers.find(o => o.id === id)
        if(found) setClickedOffer(found)
    },[id, offers])

return (
    <>
    <h4>{id}</h4>
    <p>{clickedOffer.make}</p>
    <p>{clickedOffer.type}</p>
    <p>{clickedOffer.created_at}</p>
    <p>{clickedOffer.template_filled || 'EMPTY =('}</p>

    </>
    )}

    export default Offer

