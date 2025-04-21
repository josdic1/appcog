import { useContext } from "react"
import DealerContext from "../contexts/DealerContext"

function DataDealers() {
    const { dealers } = useContext(DealerContext)

    const dealerListData = dealers.map(dealer => (
        <p key={dealer.dealer_id}>{dealer.dealer_name}</p>
    ))
return (
<>
<div>{dealerListData}</div>
</>
)}

export default DataDealers
