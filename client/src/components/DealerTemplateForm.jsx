import { useState, useEffect, useContext } from "react"
import BrandContext from "../contexts/BrandContext"
import TemplateContext from "../contexts/TemplateContext"

function DealerTemplateForm() {
    const { selectedBrand } = useContext(BrandContext)
    const { selectedTemplate, variableList } = useContext(TemplateContext)
   
    const [buttons, setButtons] = useState('')
    const [template, setTemplate] = useState('')


    useEffect(() => {
        if(selectedBrand !== "" && selectedTemplate.brand !== "") {
            renderButtons()
        }
    },[selectedBrand, selectedTemplate])

    if (!selectedBrand) return null

    const onTemplateButtonClick = (e) => {
        const { name } = e.currentTarget
        switch(name) {
            case 'buy':
                renderBuyVariables()
                break;
        }
        }


function renderButtons() {
    const buttonData = 
    <>
        <button type="button" name='buy' onClick={onTemplateButtonClick}>Buy</button>
        <button type="button" name='lease' onClick={onTemplateButtonClick}>Lease</button>
    </>
    setButtons(buttonData)
}

 

return (
    <>
    <div>{buttons}</div>
   <p>{template}</p>
    </>
    )}

    export default DealerTemplateForm
