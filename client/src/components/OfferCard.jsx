import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import LoadModeContext from "../contexts/LoadModeContext"
import CrudContext from "../contexts/CrudContext"

function OfferCard({ offer }) {
  const { handleDelete } = useContext(CrudContext)
  const {setInEditMode } = useContext(LoadModeContext)

  const navigate = useNavigate()


  const onClick = (e) => {
    const { name } = e.currentTarget
    switch(name) {
      case 'edit':
        setInEditMode(true)
        navigate(`/edit/${offer.id}`)
        break;
      case 'view':

        navigate(`/offer/${offer.id}`)
        break;
      case 'delete':
        handleDelete(offer.id)
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
