import { useContext } from "react"
import BrandContext from "../../contexts/BrandContext"
import CrudContext from "../../contexts/CrudContext"
import TemplateContext from "../../contexts/TemplateContext"

function SubmitButton() {
  const { selectedBrand, onBrandSelectEvent } = useContext(BrandContext)
  const { handleSubmit } = useContext(CrudContext)
  const { selectedTemplate, selectedType, formData } = useContext(TemplateContext)

  const rawTemplate = selectedTemplate[selectedType]

  const filledTemplate = rawTemplate.replace(/\{(\w+)\}/g, (_, key) => {
    const value = formData[key]
    return value?.trim()
      ? value
      : `[${key}]`
  })

  const onClick = () => {
    const obj = {
        ...formData,
        make: selectedBrand,
        type: selectedType,
        template_filled: filledTemplate,
        created_at: new Date().toISOString()
      }
    handleSubmit(obj)
    onBrandSelectEvent("clear", "")
  }

  return <button type="button" onClick={onClick}>Submit</button>
}

export default SubmitButton