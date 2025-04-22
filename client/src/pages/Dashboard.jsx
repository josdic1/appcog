import { useContext } from "react"
import { Navigate } from "react-router-dom"
import Form from "../components/Form"
import DealerContext from "../contexts/DealerContext"


import viteLogo from '/vite.svg'

function Dashboard() {

    const { currentUser, isHydrated } = useContext(DealerContext)

    if (!isHydrated) return null 

    if (!currentUser?.dealer_name) {
        return <Navigate to="/login" replace />
      }

return (
<>
<header>
<div>
<img
  src={viteLogo}
  className="logo"
  alt="Vite logo"
  style={{
    filter: currentUser?.dealer_name
      ? 'none'           
      : 'grayscale(1)'    
  }}
/>
</div>
</header>
<main>
<Form />
<h2>{currentUser?.dealer_name || "Not logged in"}</h2>

</main>
</>
)}

export default Dashboard
