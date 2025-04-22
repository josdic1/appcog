import { useState, useEffect, useContext } from "react"
import BrandContext from "../contexts/BrandContext"
import TemplateContext from "../contexts/TemplateContext"
import DealerVariableInputGroup from "../components/DealerVariableInputGroup"
import DealerTemplateButtons from "../components/DealerTemplateButtons"

function DealerTemplateForm() {
  const { selectedBrand } = useContext(BrandContext)
  const { selectedTemplate, variableList } = useContext(TemplateContext)

  const [variableInputs, setVariableInputs] = useState('')
  const [template, setTemplate] = useState('')

  const onTemplateButtonClick = (e) => {
    const { name } = e.currentTarget
    const vars =
      name === "buy"
        ? selectedTemplate.buy_variables
        : selectedTemplate.lease_variables

    setVariableInputs(
      <DealerVariableInputGroup variables={vars} variableList={variableList} />
    )
  }

  if (!selectedBrand) return null

  return (
    <>
      <div>
        <DealerTemplateButtons onClick={onTemplateButtonClick} />
      </div>
      <div>{variableInputs}</div>
      <p>{template}</p>
    </>
  )
}

export default DealerTemplateForm
