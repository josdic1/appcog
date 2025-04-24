import { useContext } from "react"
import BrandContext from "../../contexts/BrandContext"
import CrudContext from "../../contexts/CrudContext"

function SubmitButton({ formData }) {
    const { selectedBrand, onBrandSelectEvent } = useContext(BrandContext)
    const { handleSubmit } = useContext(CrudContext)

    let obj = {}

const onClick = () => {
        obj = {
            ...formData,
            MAKE: selectedBrand
        }
      handleSubmit(obj)
      onBrandSelectEvent("clear", "")
}

return (
<>
<button type='click' onClick={onClick} >Submit</button>
</>
)}

export default SubmitButton
