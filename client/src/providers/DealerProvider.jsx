import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import DealerContext from "../contexts/DealerContext"
import LoadModeContext from "../contexts/LoadModeContext"


function DealerProvider({children}) {
    const { setIsLoaded } = useContext(LoadModeContext)
    const [ dealers, setDealers ] = useState([])
    const [ loginInfo, setLoginInfo ] = useState({
        username: '',
        password: ''
    })
    const [currentUser, setCurrentUser] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        const stored = localStorage.getItem("user")
        if (stored) {
          setCurrentUser(JSON.parse(stored))
        }
      }, [])
      

    useEffect(() => {
        fetchDealers()
    },[])


  const onLoginInput = (e) => {
    const {name, value} = e.currentTarget
    setLoginInfo(prev => ({
        ...prev, 
        [name]: value
    }))
    }

    const onLoginClick = () => {
        const match = dealers.find(
          d => d.usercode === loginInfo.username && d.passcode === loginInfo.password
        )
        if (!match) {
          alert("Invalid login ❌")
          return
        } else {
        setCurrentUser(match)
        localStorage.setItem("user", JSON.stringify(match))
        navigate('/home')
      }}
      
      const onLogout = () => {
        setCurrentUser(null)
        localStorage.removeItem("user")
        navigate("login")
        onClearClick()
      }

      const onClearClick = () => {
        setLoginInfo({ username: '', password: '' })
      }

    async function fetchDealers() {
        try{
            const r = await fetch(`http://localhost:3000/dealers`)
            if(!r.ok){
                throw new Error("💥 Error");
            }
            const data = await r.json()
            setDealers(data)
            setIsLoaded(true)
        }catch (error) {console.error("❌ Caught error:", error);}
    }



    return (
    <>
    <DealerContext.Provider
    value={{ currentUser, dealers, loginInfo, onLoginInput, onLoginClick, onClearClick, onLogout }}
    >
        {children}
    </DealerContext.Provider>
    </>
    )}

    export default DealerProvider
