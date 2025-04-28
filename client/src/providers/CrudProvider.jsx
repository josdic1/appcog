import { useState, useEffect } from "react";
import CrudContext from "../contexts/CrudContext"


function CrudProvider({children}) {
    const [ offers, setOffers ] = useState([])
 

    useEffect(() => {
        fetchOffers()
    },[])

async function fetchOffers() {
    try{
        const r = await fetch(`http://5.161.61.8:3001/offers`)
        if(!r.ok){
            throw new Error("💥 Error");
          }
          const data = await r.json()
          setOffers(data)
    }catch (error) {console.error("❌ Caught error:", error);}
}

    async function handleSubmit(obj) {
        if (!obj.template_filled || !obj.make || !obj.type) {
            console.warn("❌ Submission blocked — missing required data.")
            return
          }
        try {
          const r = await fetch(`http://5.161.61.8:3001/offers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
          })
          if(!r.ok){
            throw new Error("💥 Error");
          }
          const data = await r.json()
          const updated = [...offers, data]
          setOffers(updated)
        }catch (error) {console.error("❌ Caught error:", error);}  
    }

    async function handleUpdate(obj) {
        if (!obj.template_filled || !obj.make || !obj.type) {
            console.warn("❌ Submission blocked — missing required data.")
            return
          }
        try {
          const r = await fetch(`http://5.161.61.8:3001/offers/${obj.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
          })
          if(!r.ok){
            throw new Error("💥 Error");
          }
          const data = await r.json()
         const updated = offers.map(offer => (
            offer.id === data.id ? data : offer
         ))
          setOffers(updated)
        }catch (error) {console.error("❌ Caught error:", error);}  
    }

    async function handleDelete(offerId) {
        const filtered = offers.filter(o => o.id !== offerId)
        try {
            const r = await fetch(`http://5.161.61.8:3001/offers/${offerId}`,{
                method: 'DELETE'
            })
            if(!r.ok) {
                throw new Error("💥 Error");
            }
            setOffers(filtered)
        }catch (error) {console.error("❌ Caught error:", error);}
    }


return (
<>
<CrudContext.Provider
    value={{ offers,  handleSubmit, handleUpdate, handleDelete }}>
        {children}
    </CrudContext.Provider>
</>
)}

export default CrudProvider
