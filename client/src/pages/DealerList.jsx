import { useContext } from "react"
import DealerContext from "../contexts/DealerContext"


function DealerList() {
    const { dealers } = useContext(DealerContext)

return (
<>
<table>
        <thead>
            <tr>
            <th>View</th>
            <th>Make</th>
            <th>Type</th>
            <th>Created</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {}
        </tbody>
    </table>
</>
)}

export default DealerList
