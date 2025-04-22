import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import DealerContext from "../contexts/DealerContext"



function AuthButton() {

  const { currentUser, onLogout } = useContext(DealerContext)

  const navigate = useNavigate()

  const authButtonElement = currentUser?.dealer_name ?
    <>
      <button type="button" onClick={currentUser?.dealer_name ? onLogout : () => navigate("/login")
      }>
        Logout
      </button>
    </> : ""

  return (
    <>
      {authButtonElement}

    </>
  )
}

export default AuthButton
