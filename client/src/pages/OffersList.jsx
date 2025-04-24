import { useContext } from "react"
import CrudContext from "../contexts/CrudContext"
import OfferCard from "../components/OfferCard"

function OffersList() {
    const { offers } = useContext(CrudContext)

    const offerlistData = offers.map(offer => (
        <OfferCard key={offer.id} offer={offer} />
    ))

return (
<>
    <table>
        <thead>
            <tr>
            <th>View</th>
            <th>Make</th>
            <th>Type</th>
            <th>Created</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {offerlistData}
        </tbody>
    </table>

</>
)}

export default OffersList
