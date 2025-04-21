import { useContext } from "react"
import BrandContext from "../contexts/BrandContext"

function DataBrands() {
    const { brands } = useContext(BrandContext)

    const brandListData = brands.map(brand => (
        <p key={brand.name}>{brand.name}</p>
    ))
return (
<>
<div>{brandListData}</div>
</>
)}

export default DataBrands