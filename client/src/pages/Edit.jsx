import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import CrudContext from "../contexts/CrudContext"
import EditCard from "../components/EditCard"

function Edit() {
    const { offers, handleUpdate } = useContext(CrudContext)

    const [ clickedOffer, setClickedOffer] = useState(null)
    const [ updatedOffer, setUpdatedOffer] = useState(null)

const {id} = useParams()

useEffect(() => {
    const match = offers.find(o => o.id === id)
    if(match) setClickedOffer(match)
},[id, offers])


const inputs = clickedOffer
?  Object.keys(clickedOffer).map(k => (
<EditCard key={k} name={k} value={clickedOffer[k]} onChange={onChange} />


 )) : null

function onChange(name, value) {
    const obj = {
        ...clickedOffer,
        [name]: value
    }
    setUpdatedOffer(obj)
}

function onSubmit(e) {
    e.preventDefault()
    const updated = updatedOffer
    handleUpdate(updated)
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
