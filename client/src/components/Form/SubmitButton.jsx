import { useContext } from "react"
import BrandContext from "../../contexts/BrandContext"
import CrudContext from "../../contexts/CrudContext"
import TemplateContext from "../../contexts/TemplateContext"
import DealerContext from "../../contexts/DealerContext"

function SubmitButton() {
  const { selectedBrand, onBrandSelectEvent } = useContext(BrandContext)
  const { handleSubmit } = useContext(CrudContext)
  const { currentUser } = useContext(DealerContext)
  const { selectedTemplate, selectedType, formData } = useContext(TemplateContext)

  const rawTemplate = selectedTemplate[selectedType]

  const filledTemplate = rawTemplate.replace(/\{(\w+)\}/g, (_, key) => {
    const value = formData[key]
    return value?.trim()
      ? value
      : `[${key}]`
  })


  function onSubmit(e) {
    e.preventDefault()
    const obj = {
        ...formData,
        make: selectedBrand,
        type: selectedType,
        template_filled: filledTemplate,
        created_at: new Date().toLocaleString(),
        created_by: currentUser?.dealer_id
      }
    handleSubmit(obj)
    onBrandSelectEvent("clear", "")
  }


  return (
    <>
    <form onSubmit={onSubmit}>
    <button type="submit" >
      Submit
    </button>
    </form>
    </>
  )
}

export default SubmitButton