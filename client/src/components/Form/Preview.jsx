import { useContext } from "react"
import TemplateContext from "../../contexts/TemplateContext"

function Preview() {
  const { selectedTemplate, selectedType, formData } = useContext(TemplateContext)

  if (!selectedTemplate || !selectedTemplate[selectedType]) return null

  const rawTemplate = selectedTemplate[selectedType]

  const filledTemplate = rawTemplate.replace(/\{(\w+)\}/g, (_, key) => {
    const value = formData[key]
    return value?.trim()
      ? value
      : `[${key}]`
  })

  
  return (
    <>
      <h3>Compliance Statement</h3>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{filledTemplate}</pre>
    </>
  )
}

export default Preview