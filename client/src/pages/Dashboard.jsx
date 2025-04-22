import { useContext } from "react"
import { Navigate } from "react-router-dom"
import DealerContext from "../contexts/DealerContext"
import LogButton from "../components/LogButton"

function Dashboard() {
    const { currentUser } = useContext(DealerContext)
    
    if (!currentUser?.dealer_name) {
        return <Navigate to="/login" replace />
      }

return (
<>
<LogButton />
<h1>{currentUser?.dealer_name || "Not logged in"}</h1>

</>
)}

export default Dashboard
