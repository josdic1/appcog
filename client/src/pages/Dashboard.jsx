import { useContext } from "react"
import DealerContext from "../contexts/DealerContext"

function Dashboard() {
    const { currentUser } = useContext(DealerContext)

return (
<>
<h1>{currentUser.dealer_name}</h1>
</>
)}

export default Dashboard
