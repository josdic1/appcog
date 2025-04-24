
import CrudContext from "../contexts/CrudContext"


function CrudProvider({children}) {

    async function handleSubmit(obj) {
        try {
          console.log(obj)
        }catch (error) {console.error("❌ Caught error:", error);}  
    }


return (
<>
<CrudContext.Provider
    value={{ handleSubmit }}>
        {children}
    </CrudContext.Provider>
</>
)}

export default CrudProvider
