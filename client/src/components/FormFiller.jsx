import { useContext } from "react"
import VariableInputGroup from "./Form/VariableInputGroup"
import TemplateContext from "../contexts/TemplateContext"

function FormFiller() {

    const { formData, setFormData } = useContext(TemplateContext)

    const handleFormChange = (inputName, inputValue) => {
        const updated = {
            ...formData,
            [inputName]: inputValue
        }
        setFormData(updated)
    }

    return (
        <>
        <VariableInputGroup formData={formData} handleFormChange={handleFormChange}/>
  
        </>
        )}

        export default FormFiller
