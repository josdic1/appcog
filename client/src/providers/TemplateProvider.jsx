import { useState, useEffect, useContext } from "react";
import TemplateContext from "../contexts/TemplateContext";
import BrandContext from "../contexts/BrandContext";

function TemplateProvider({children}) {
    const { selectedBrand } = useContext(BrandContext)

    const [selectedTemplate, setSelectedTemplate] = useState("")
    const [variableList, setVariableList] = useState([])
    const [selectedType, setSelectedType] = useState("")
const [filledValues, setFilledValues] = useState({})

useEffect(() => {
    if (selectedBrand) {
      fetchBrandTemplate()
      setSelectedType("")       // ← 🔑 this line resets Buy/Lease
      setFilledValues({})
    }
  }, [selectedBrand])



    async function fetchBrandTemplate() {
        try{
            const r = await fetch(`http://localhost:3000/templates`)
            if(!r.ok){
                throw new Error("💥 Error");
            }
            const data = await r.json()
            const filtered = data.find(t => t.brand === selectedBrand)
            setSelectedTemplate(filtered)
            fetchTemplateVariables()
        }catch (error) {console.error("❌ Caught error:", error);}
    }

    async function fetchTemplateVariables() {
        try{
            const r = await fetch(`http://localhost:3000/variables`)
            if(!r.ok){
                throw new Error("💥 Error");
            }
            const data = await r.json()
            setVariableList(data)
        }catch (error) {console.error("❌ Caught error:", error);}  
    }

return (
<>
<TemplateContext.Provider
value={{    selectedTemplate,
    variableList,
    selectedType,
    setSelectedType,
    filledValues,
    setFilledValues }}
>
    {children}
</TemplateContext.Provider>
</>
)}

export default TemplateProvider
