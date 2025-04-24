import { useParams } from "react-router-dom"
import { useContext } from "react"
import CrudContext from "../contexts/CrudContext"

function Offer() {
    const { selectedOffer} = useContext(CrudContext)
    
    const { id } = useParams()

return (
    <>
    <h4>{id}</h4>
    <p>{selectedOffer.make}</p>
    <p>{selectedOffer.type}</p>
    <p>{selectedOffer.created_at}</p>
    <p>{selectedOffer.template_filled || 'EMPTY =('}</p>
    </>
    )}

    export default Offer

