import { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import CrudContext from "../contexts/CrudContext"
import EditCard from "../components/EditCard"

function Edit() {
    const { offers, handleUpdate } = useContext(CrudContext)


    const [ updatedOffer, setUpdatedOffer] = useState(null)

const {id} = useParams()

const navigate = useNavigate()


useEffect(() => {
    const match = offers.find(o => o.id === id)
    if (match) {
 
        setUpdatedOffer(match)
      }
},[id, offers])


const inputs = updatedOffer
  ? Object.keys(updatedOffer).map(k => (
      <EditCard key={k} name={k} value={updatedOffer[k]} onChange={onChange} />
    ))
  : null

function onChange(name, value) {
   setUpdatedOffer(prev => ({
        ...prev,
        [name]: value
   }))
}


function onSubmit(e) {
    e.preventDefault()
    const updated = {
      ...updatedOffer,
      template_filled: `Buy the ${updatedOffer.YEAR} ${updatedOffer.make} ${updatedOffer.MODEL} with ${updatedOffer.APR_RATE}% APR for ${updatedOffer.APR_TERM} months. MSRP: ${updatedOffer.MSRP}. Expires ${updatedOffer.EXPIRATION_DATE}.`
    }
    handleUpdate(updated)
    navigate('/offerlist')
}



return (
<>
<form onSubmit={onSubmit}>
{inputs}
    <button type="submit" >
      Update
    </button>
    </form>


</>
)}

export default Edit
