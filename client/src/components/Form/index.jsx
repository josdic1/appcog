import BrandSelect from "./BrandSelect"
import TypeButtons from "./TypeButtons"
import FormFiller from "../FormFiller"
import GateCheck from "./GateCheck"

function Form() {
  return (
    <section>
      <BrandSelect />
      <TypeButtons />
      <FormFiller />
      <GateCheck /> 
    </section>
  )
}

export default Form