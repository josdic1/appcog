import { useContext } from "react"
import BrandContext from "../contexts/BrandContext"

function BrandCard({ brand, checked, handleCheck }) {
    const { setSelectedBrand} = useContext(BrandContext)
const onChange = (e) => {
        const { id, value, checked } = e.currentTarget
        const obj = {
            id:id,
            name:value,
            checked:checked
        }

        handleCheck(obj)
}

        return (
          <div key={brand.id}>
            <label htmlFor={brand.name}>{brand.name}</label>
            <input
              type="checkbox"
              id={brand.id}
              value={brand.name}
              checked={checked}       
              onChange={onChange}       
            />
          </div>
        )
      }
export default BrandCard
