import { useContext } from "react"
import BrandContext from "../contexts/BrandContext"

function DealerBrandSelect() {
    const { dealerBrands, onBrandSelect, selectedBrand } = useContext(BrandContext)


    if (!dealerBrands) return null

    const dropdown = dealerBrands.map(brand => (
        <option key={brand.id} value={brand.name}>
          {brand.name}
        </option>
      ))
    
      return (
        <select onChange={onBrandSelect} value={selectedBrand}>
          <option value="" disabled>Select one...</option>
          {dropdown}
        </select>
      )
    }

export default DealerBrandSelect
