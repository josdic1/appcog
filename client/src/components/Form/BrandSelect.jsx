import { useContext } from "react"
import BrandContext from "../../contexts/BrandContext"
 

function BrandSelect() {
  const { dealerBrands, onBrandSelectEvent, selectedBrand } = useContext(BrandContext)


  if (!dealerBrands) return null

  const onEvent = (e) => {
    const { name, value } = e.currentTarget
    onBrandSelectEvent(name, value)
  }

  return (
    <>
      <select name='select' onChange={onEvent} value={selectedBrand}>
        <option value="" disabled>Select one...</option>
        {dealerBrands.map(brand => (
          <option key={brand.id} value={brand.name}>{brand.name}</option>
        ))}
      </select>
      <button type="button" name='clear' onClick={onEvent}>Clear</button>
    </>
  )
}

export default BrandSelect