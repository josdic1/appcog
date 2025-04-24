
import { useContext } from "react"
import DealerContext from "../contexts/DealerContext"

function AuthButton() {
  const dealerCtx = useContext(DealerContext)

  if (!dealerCtx) {
    console.warn("❌ DealerContext is undefined in AuthButton")
    return null
  }

  const { currentUser, onLogout } = dealerCtx


  const authButtonElement = currentUser?.dealer_name && (
    <button type="button" onClick={onLogout}>Logout</button>
  )

  return <>{authButtonElement}</>
}

export default AuthButton
