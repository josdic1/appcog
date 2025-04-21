
import { useState, useEffect } from "react"

function DataVariables() {


    const [ variables, setVariables ] = useState([])

    useEffect(() => {
        fetchVariables()
    },[])



    async function fetchVariables() {
        try{
            const r = await fetch(`http://localhost:3000/variables`)
            if(!r.ok){
                throw new Error("💥 Error");
            }
            const data = await r.json()
            setVariables(data)
        }catch (error) {console.error("❌ Caught error:", error);}
    }

    return (
    <>
        {variables.map((variable) => (
        <p key={variable.key}>{variable.label}</p>
      ))}
    </>
    )}

    export default DataVariables

