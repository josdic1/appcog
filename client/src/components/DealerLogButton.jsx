import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import DealerContext from "../contexts/DealerContext"



function DealerLogButton() {
    
    const  { currentUser, onLogout } = useContext(DealerContext)


    const navigate = useNavigate()

 
    return (
        <>
        
        <button type="button" onClick={currentUser?.dealer_name ? onLogout : () => navigate("/login")
}>
          {currentUser?.dealer_name ? "Logout" : "Login"}
        </button>
</>
)}

export default DealerLogButton
