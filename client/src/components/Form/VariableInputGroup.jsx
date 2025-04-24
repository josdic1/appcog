import { useContext } from "react"
import TemplateContext from "../../contexts/TemplateContext"
import BrandContext from "../../contexts/BrandContext"

function VariableInputGroup({ handleFormChange }) {
  const  {selectedBrand} = useContext(BrandContext)
  
  const { selectedTemplate, selectedType, variableList, formData } = useContext(TemplateContext)

  
  if (!selectedTemplate || !selectedType || !selectedBrand) return null

  const onChange = (e) => {
      const { name, value } = e.currentTarget
      handleFormChange(name, value)
  }

  const variableKeys = selectedTemplate[`${selectedType}_variables`] || []

  return (
    <>
      {variableKeys.map(key => {
        const match = variableList.find(v => v.key === key)
        return match ? (
          <div key={match.key}>
            <label htmlFor={match.label}>{match.label}</label>
            <input
              type={match.type}
              name={match.key}
              placeholder={match.label}
              onChange={onChange}
              value={formData[match.key] || ""}
            />
          </div>
        ) : null
      })}
    </>
  )
}

export default VariableInputGroup