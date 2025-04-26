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
    const [isHydrated, setIsHydrated] = useState(false)
    const [inEditMode, setInEditMode] = useState(false)
    const [selectedDealer, setSelectedDealer] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
      const stored = localStorage.getItem("user")
      if (stored) {
        setCurrentUser(JSON.parse(stored))
      }
      setIsHydrated(true)
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

      function onCleanUp() {
        setSelectedDealer({})
        setInEditMode(false)
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

    async function handleAdd(newDealer) {
      try {
        const r = await fetch(`http://localhost:3000/dealers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newDealer),
        })
        if (!r.ok) throw new Error("Failed to add dealer")
        const data = await r.json()
        setDealers(prev => [...prev, data])
      } catch (error) {
        console.error("❌ Dealer add error:", error)
      }
    }
    
    async function handleUpdate(updatedDealer) {
      try {
        const r = await fetch(`http://localhost:3000/dealers/${updatedDealer.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedDealer),
        })
        if (!r.ok) throw new Error("Failed to update dealer")
        const data = await r.json()
        setDealers(prev => prev.map(d => (d.id === data.id ? data : d)))
      } catch (error) {
        console.error("❌ Dealer update error:", error)
      }
    }

    async function handleDelete(dealerId) {
      try {
        const r = await fetch(`http://localhost:3000/dealers/${dealerId}`, {
          method: "DELETE",
        })
        if (!r.ok) throw new Error("Failed to delete dealer")
       const filtered = [...dealers].filter(d => d.id !== dealerId)
      setDealers(filtered)
      } catch (error) {
        console.error("❌ Dealer delete error:", error)
      }
    }



    return (
    <>
    <DealerContext.Provider
    value={{ currentUser, dealers, loginInfo, isHydrated, onLoginInput, onLoginClick, onClearClick, onLogout, inEditMode, setInEditMode, selectedDealer, setSelectedDealer, handleUpdate, handleDelete, handleAdd}}
    >
        {children}
    </DealerContext.Provider>
    </>
    )}

    export default DealerProvider
