import { useContext } from "react"
import TemplateContext from "../../contexts/TemplateContext"
import Preview from "./Preview"
import SubmitButton from "./SubmitButton"

function GateCheck() {
  const { selectedTemplate, selectedType, formData } = useContext(TemplateContext)

  if (!selectedTemplate || !selectedType) return null

  const requiredKeys = selectedTemplate?.[`${selectedType}_variables`] || []
  const missing = requiredKeys.filter(key => !formData[key]?.trim())

  return (
    <>
      <Preview />
      {missing.length > 0
        ? <p>❌ Missing: {missing.join(", ")}</p>
        : <SubmitButton  />}
    </>
  )
}

export default GateCheck
