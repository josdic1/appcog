import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import DealerContext from "../contexts/DealerContext"

function DealerCard({ dealer }) {
  const { handleDelete, setInEditMode, setSelectedDealer } = useContext(DealerContext)


  const navigate = useNavigate()


  const onClick = (e) => {
    const { name } = e.currentTarget
    switch(name) {
      case 'edit':
        setSelectedDealer(dealer)
        setInEditMode(true)
        navigate('/dealerform')
        break;
      case 'view':
        navigate(`/dealer/${dealer.id}`)
        break;
      case 'delete':
        handleDelete(dealer.id)
    }
  }

  return (
    <tr id={dealer.id}>
      <td><button type='button' id={dealer.id} name='view' onClick={onClick}>View Offers for ID# {dealer.dealer_id}</button></td>
      <td>{dealer.dealer_name}</td>
      <td>{dealer.owner}</td>
      <th>{dealer.brands.join(" ")}</th>
      <td><button type='button' name='edit' id={dealer.id} onClick={onClick}>Edit</button></td>
      <td><button type='button' name='delete' id={dealer.id} onClick={onClick}>Delete</button></td>
    </tr>
  )
}

export default DealerCard
