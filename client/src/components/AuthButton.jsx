
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import DealerContext from "../contexts/DealerContext"

function AuthButton() {
  const dealerCtx = useContext(DealerContext)

  if (!dealerCtx) {
    console.warn("❌ DealerContext is undefined in AuthButton")
    return null
  }

  const { currentUser, onLogout } = dealerCtx

  const navigate = useNavigate()

  const authButtonElement = currentUser?.dealer_name ? (
    <button type="button" onClick={onLogout}>Logout</button>
  ) : (
    <button type="button" onClick={() => navigate("/login")}>Login</button>
  )

  return <>{authButtonElement}</>
}

export default AuthButton
