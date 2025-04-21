import { useState, useEffect } from "react"

function DataTemplates () {
    const [ templates, setTemplates ] = useState([])

    useEffect(() => {
        fetchTemplates ()
    },[])



    async function fetchTemplates() {
        try{
            const r = await fetch(`http://localhost:3000/templates`)
            if(!r.ok){
                throw new Error("💥 Error");
            }
            const data = await r.json()
            setTemplates(data)
        }catch (error) {console.error("❌ Caught error:", error);}
    }

    return (
    <>
        {templates.map((template) => (
        <p key={template.brand}>{template.brand}: {template.updated_on}</p>
      ))}
    </>
    )}

        export default DataTemplates

