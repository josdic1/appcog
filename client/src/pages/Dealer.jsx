import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import CrudContext from "../contexts/CrudContext"
import DealerContext from "../contexts/DealerContext"


function Dealer() {
    const { id } = useParams()

    const { offers } = useContext(CrudContext)
    const { dealers } = useContext(DealerContext)
        
    const [ clickedDealer, setClickedDealer] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        const found = dealers.find(o => o.id === id)
        if(found) setClickedDealer(found)
    },[id, dealers])

const onClick = (id) => {
    navigate(`/offer/${id}`)
}



    


    const dealerOfferTable = offers
        .filter(o => o.created_by === clickedDealer.dealer_id)
        .map(d => (
            <tr key={d.id}>
                <td>{d.make}</td>
                <td>{d.MODEL}</td>
                <td>{d.created_at}</td>
                <td><button type='button' name='view-offer' onClick={() => onClick(d.id)}> View Offer</button> </td>
            </tr>
        ))


return (
<>
<h3>ID: {id}</h3>
<h5>Name: {clickedDealer.dealer_name}</h5>
<h5>Owner: {clickedDealer.owner}</h5>
<h5>Email: {clickedDealer.email}</h5>
<h5>User: {clickedDealer.usercode}</h5>
<h5>Password: {clickedDealer.passcode}</h5>
<h6>Brands: {clickedDealer.brands?.join(" * ")}</h6>
<table>
<thead>
    <tr>
    <th>Make</th>
    <th>Model</th>
    <th>Created on</th>
    <th>View Offer</th>
    </tr>
</thead>
<tbody>
{dealerOfferTable}
</tbody>


</table>
</>
)}

export default Dealer
