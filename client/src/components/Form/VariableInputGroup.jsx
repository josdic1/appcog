import { useContext } from "react"
import TemplateContext from "../../contexts/TemplateContext"
import BrandContext from "../../contexts/BrandContext"

function VariableInputGroup() {
  const  {selectedBrand} = useContext(BrandContext)
  const { selectedTemplate, selectedType, variableList } = useContext(TemplateContext)

  if (!selectedTemplate || !selectedType || !selectedBrand) return null

  const variableKeys = selectedTemplate[`${selectedType}_variables`] || []

  return variableKeys.map(key => {
    const match = variableList.find(v => v.key === key)
    return match ? (
      <div key={match.key}>
        <label htmlFor={match.label}>{match.label}</label>
        <input
          type={match.type}
          name={match.label}
          placeholder={match.label}
        />
      </div>
    ) : null
  })
}

export default VariableInputGroup
