import { useState, useEffect, useContext } from "react";
import TemplateContext from "../contexts/TemplateContext";
import BrandContext from "../contexts/BrandContext";

function TemplateProvider({children}) {
    const { selectedBrand } = useContext(BrandContext)

    const [selectedTemplate, setSelectedTemplate] = useState("")

    useEffect(() => {
        if(selectedBrand) {
            fetchBrandTemplate()
        }
    },[selectedBrand])



    async function fetchBrandTemplate() {
        try{
            const r = await fetch(`http://localhost:3000/templates`)
            if(!r.ok){
                throw new Error("💥 Error");
            }
            const data = await r.json()
            const filtered = data.find(t => t.brand === selectedBrand)
            setSelectedTemplate(filtered)
        }catch (error) {console.error("❌ Caught error:", error);}
    }

return (
<>
<TemplateContext.Provider
value={{ selectedTemplate }}
>
    {children}
</TemplateContext.Provider>
</>
)}

export default TemplateProvider
