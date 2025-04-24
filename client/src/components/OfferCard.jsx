import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import LoadModeContext from "../contexts/LoadModeContext"
import CrudContext from "../contexts/CrudContext"

function OfferCard({ offer }) {
  const {offers, setSelectedOffer, handleDelete } = useContext(CrudContext)
  const {setInEditMode } = useContext(LoadModeContext)

  const navigate = useNavigate()


  const onClick = (e) => {
    const { id, name } = e.currentTarget
    const offerObj = offers.find(o => o.id === id)
    switch(name) {
      case 'edit':
        setInEditMode(true)
        setSelectedOffer(offerObj)
        break;
      case 'view':
        setSelectedOffer(offerObj)
        navigate(`/offer/${id}`)
        break;
      case 'delete':
        handleDelete(id)
    }
  }

  return (
    <tr id={offer.id}>
      <td><button type='button' id={offer.id} name='view' onClick={onClick}>View {offer.id}</button></td>
      <td>{offer.make}</td>
      <td>{offer.type}</td>
      <td>{offer.created_at}</td>
      <td><button type='button' name='edit' id={offer.id} onClick={onClick}>Edit</button></td>
      <td><button type='button' name='delete' id={offer.id} onClick={onClick}>Delete</button></td>
    </tr>
  )
}

export default OfferCard
