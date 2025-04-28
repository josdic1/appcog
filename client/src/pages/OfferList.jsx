import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import CrudContext from "../contexts/CrudContext"
import DealerContext from "../contexts/DealerContext"
import OfferCard from "../components/OfferCard"
import Filter from "../components/List/Filter"

function OffersList() {
    const { offers } = useContext(CrudContext)
    const { currentUser } = useContext(DealerContext)

    const [filteredList, setFilteredList] = useState(offers)
    const [filterObj, setFilterObj] = useState({
        text: '',
    })



    useEffect(() => {
      if (!currentUser) return
    
      if (currentUser.user_type === "dealer") {
        const dealerOffers = offers.filter(offer => offer.created_by === currentUser.dealer_id)
        setFilteredList(dealerOffers)
      } else {
        setFilteredList(offers)
      }
    }, [offers, currentUser])


// const navigate = useNavigate()


function handleFilterChange(val) {
  setFilterObj(prev => ({ ...prev, text: val }))

  const baseList = currentUser?.user_type === "dealer"
  ? offers.filter(offer => offer.created_by === currentUser.dealer_id)
    : offers

  if (val.trim() === "") {
    setFilteredList(baseList)  // Reset full list if input is empty
    return baseList
  }

  const matchText = baseList.filter(o =>
    o.template_filled.toLowerCase().includes(val.toLowerCase())
  )

  setFilteredList(matchText)
  return matchText
}

  
    
    

return (
<>

<Filter filterObj={filterObj} onFilterChange={handleFilterChange}/>
    <table>
        <thead>
            <tr>
            <th>View</th>
            <th>Make</th>
            <th>Type</th>
            <th>Created</th>
            <th>By</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
  {filteredList.map(offer => (
    <OfferCard key={offer.id} offer={offer} />
  ))}
</tbody>
    </table>

</>
)}

export default OffersList
