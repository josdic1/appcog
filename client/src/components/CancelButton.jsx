import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import LoadModeContext from "../contexts/LoadModeContext"
import BrandContext from "../contexts/BrandContext"

function CancelButton() {
    const { setInEditMode } = useContext(LoadModeContext)
    const {onBrandSelectEvent} = useContext(BrandContext)

    const navigate = useNavigate()

const onClick = () => {
    setInEditMode(false)
    onBrandSelectEvent("clear", "")
    navigate('/')
}

return (
<>
<button type='button' name='cancel' onClick={onClick}>Cancel</button>
</>
)}

export default CancelButton
