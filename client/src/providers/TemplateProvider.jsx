import { useState, useEffect, useContext } from "react";
import TemplateContext from "../contexts/TemplateContext";
import BrandContext from "../contexts/BrandContext";


function TemplateProvider({children}) {
    const { selectedBrand } = useContext(BrandContext)

    const [selectedTemplate, setSelectedTemplate] = useState(null)
    const [variableList, setVariableList] = useState([])
    const [selectedType, setSelectedType] = useState("")
const [formData, setFormData] = useState({})


useEffect(() => {
  setSelectedType("")
  setFormData({})

  if (selectedBrand) {
    fetchBrandTemplate()
  } else {
    setSelectedTemplate(null)
  }
}, [selectedBrand])

  async function fetchBrandTemplate() {
    try {
      const r = await fetch(`http://5.161.61.8:3001/templates`)
      if (!r.ok) throw new Error("💥 Error")
      const data = await r.json()
      const filtered = data.find(t => t.brand === selectedBrand)
  
      setSelectedTemplate(filtered) 
      fetchTemplateVariables()
    } catch (error) {
      console.error("❌ Caught error:", error)
    }
  }

    async function fetchTemplateVariables() {
        try{
            const r = await fetch(`http://5.161.61.8:3001/variables`)
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
    formData,
    setFormData }}
>
    {children}
</TemplateContext.Provider>
</>
)}

export default TemplateProvider
