import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import BrandContext from "../contexts/BrandContext"

function CancelButton() {

    const {onBrandSelectEvent} = useContext(BrandContext)

    const navigate = useNavigate()

const onClick = () => {
    onBrandSelectEvent("clear", "")
    navigate('/')
}

return (
<>
<button type='button' name='cancel' onClick={onClick}>Cancel</button>
</>
)}

export default CancelButton
