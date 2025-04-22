import BrandSelect from "./BrandSelect"
import TypeButtons from "./TypeButtons"
import VariableInputGroup from "./VariableInputGroup"
import Preview from "./Preview"

function Form() {
  return (
    <section>
      <BrandSelect />
      <TypeButtons />
      <VariableInputGroup />
      <Preview />
    </section>
  )
}

export default Form