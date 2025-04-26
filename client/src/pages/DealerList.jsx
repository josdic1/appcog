import {useContext } from "react"
import DealerContext from "../contexts/DealerContext"
import DealerCard from "../components/DealerCard"

function DealerList() {
    const { dealers } = useContext(DealerContext)

    

    const dealerlistData = dealers.map(dealer => (
        <DealerCard key={dealer.id} dealer={dealer}  />
    ))

return (
<>
<table>
        <thead>
            <tr>
            <th>View</th>
            <th>Name</th>
            <th>Owner</th>
     
            <th>Brands</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {dealerlistData}
        </tbody>
    </table>
</>
)}

export default DealerList
