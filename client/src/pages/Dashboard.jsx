import { useContext } from "react"
import { Navigate } from "react-router-dom"
import Form from "../components/Form"

import DealerContext from "../contexts/DealerContext"


function Dashboard() {

    const { currentUser, isHydrated } = useContext(DealerContext)

    if (!isHydrated) return null 

    if (!currentUser?.dealer_name) {
        return <Navigate to="/login" replace />
      }

return (
<>
<header>
<h2>{`Logged in as ${currentUser?.dealer_name}` || "Not logged in"}</h2>
</header>
<main>
<Form />


</main>
</>
)}

export default Dashboard
