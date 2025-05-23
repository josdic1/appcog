import { useContext } from "react"
import TemplateContext from "../../contexts/TemplateContext"
import BrandContext from "../../contexts/BrandContext"

function TypeButtons() {

  const { setSelectedType } = useContext(TemplateContext)
  const { selectedBrand } = useContext(BrandContext)

  const handleClick = (e) => {
    const type = e.currentTarget.name

    setSelectedType(type)
  }

  if (!selectedBrand) return null
  
  return (
<div>
  <section>  <em>Select an offer template</em></section>

  <button type="button" name="buy" onClick={handleClick}>Buy</button>
  <button type="button" name="lease" onClick={handleClick}>Lease</button>
</div>
  )
}

export default TypeButtons