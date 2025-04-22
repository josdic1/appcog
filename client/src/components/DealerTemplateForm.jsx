import { useContext } from "react"
import BrandContext from "../contexts/BrandContext"
import TemplateContext from "../contexts/TemplateContext"

function DealerTemplateForm() {
    const { selectedBrand } = useContext(BrandContext)
    const { selectedTemplate } = useContext(TemplateContext)

    if (!selectedBrand) return null



return (
    <>
        <p></p>
    </>
    )}

    export default DealerTemplateForm
