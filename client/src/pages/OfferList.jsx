import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import CrudContext from "../contexts/CrudContext"
import OfferCard from "../components/OfferCard"
import Filter from "../components/List/Filter"

function OffersList() {
    const { offers } = useContext(CrudContext)

    const [filteredList, setFilteredList] = useState(offers)
    const [filterObj, setFilterObj] = useState({
        text: '',
    })

useEffect(() => {
  setFilteredList(offers)
}, [offers])

const navigate = useNavigate()

    const offerlistData = filteredList.map(offer => (
        <OfferCard key={offer.id} offer={offer} />
    ))
    
    function handleFilterChange(val) {
        const matchText = offers.filter(o => 
          o.template_filled.toLowerCase().includes(val.toLowerCase())
        )
      
        setFilterObj(prev => ({ ...prev, text: val }))
        setFilteredList(matchText)

        return matchText
      }
  
    
    

return (
<>
<button type="button" onClick={() => navigate('/home')}>New Offer</button><br></br>
<Filter filterObj={filterObj} onFilterChange={handleFilterChange}/>
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
