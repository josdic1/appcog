import { useEffect } from "react"
import { useParams } from "react-router-dom"

function Dealer() {
    const { id } = useParams()

    useEffect(() => {

    },[])

return (
<>
<h5>{id}</h5>
</>
)}

export default Dealer
