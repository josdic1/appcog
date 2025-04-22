import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import DealerContext from "../contexts/DealerContext"


function DealerProvider({children}) {

    const  [isLoggedIn, setisLoggedIn] = useState(false)
    const [ dealers, setDealers ] = useState([])
    const [ loginInfo, setLoginInfo ] = useState({
        username: '',
        password: ''
    })
    const [currentUser, setCurrentUser] = useState(null)

    const navigate = useNavigate()

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
        }
      
        setCurrentUser(match)
        navigate('/home')
      }

    const onClearClick = () => {
        setLoginInfo({
        username: '',
        password: ''
        })
    }

    async function fetchDealers() {
        try{
            const r = await fetch(`http://localhost:3000/dealers`)
            if(!r.ok){
                throw new Error("💥 Error");
            }
            const data = await r.json()
            setDealers(data)
        }catch (error) {console.error("❌ Caught error:", error);}
    }



    return (
    <>
    <DealerContext.Provider
    value={{ currentUser, dealers, loginInfo, isLoggedIn, onLoginInput, onLoginClick, onClearClick }}
    >
        {children}
    </DealerContext.Provider>
    </>
    )}

    export default DealerProvider
