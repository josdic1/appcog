import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import DealerContext from "../contexts/DealerContext"

function DealerProvider({children}) {
    const [ dealers, setDealers ] = useState([])
    const [ loginInfo, setLoginInfo ] = useState({
        username: '',
        password: ''
    })
    const [currentUser, setCurrentUser] = useState({
       current_username: '',
       current_password: ''
    })

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
        const matchIndex = dealers.findIndex(
            d => d.usercode === loginInfo.username && d.passcode === loginInfo.password
          )
          setCurrentUser(dealers[matchIndex])
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
    value={{ currentUser, dealers, loginInfo, onLoginInput, onLoginClick, onClearClick }}
    >
        {children}
    </DealerContext.Provider>
    </>
    )}

    export default DealerProvider
