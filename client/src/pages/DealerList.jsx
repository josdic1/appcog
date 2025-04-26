import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import DealerContext from "../contexts/DealerContext"
import BrandContext from "../contexts/BrandContext"
import DealerCard from "../components/DealerCard"
import DealerFilter from "../components/List/DealerFilter"

function DealerList() {
  const { dealers } = useContext(DealerContext)
  const { brands } = useContext(BrandContext)

  const [filterObject, setFilterObject] = useState({
    text: '',
    select: 'all'
  })

  const [filteredList, setFilteredList] = useState(dealers)
  const navigate = useNavigate()

  useEffect(() => {
    setFilteredList(dealers)
  }, [dealers])

  useEffect(() => {
    handleFilter()
  }, [filterObject, dealers])

  function handleFilter() {
    const result = dealers.filter(dealer => {
      const matchesText = dealer.dealer_name.toLowerCase().includes(filterObject.text.trim().toLowerCase()) || filterObject.text.trim() === ""
      const matchesBrand =
        filterObject.select === "all" ||
        dealer.brands.map(b => b.toLowerCase()).includes(filterObject.select.toLowerCase())
      return matchesText && matchesBrand
    })
    setFilteredList(result)
  }

  const dealerlistData = filteredList.map(dealer => (
    <DealerCard key={dealer.id} dealer={dealer} />
  ))

  return (
    <>
      <DealerFilter
        dealers={dealers}
        brands={brands}
        filterObject={filterObject}
        setFilterObject={setFilterObject}
      />

      <button type="button" onClick={() => navigate('/dealerform')}>
        New Dealer
      </button>

      <table>
        <thead>
          <tr>
            <th>View</th>
            <th>Name</th>
            <th>Owner</th>
            <th>Brands</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {dealerlistData}
        </tbody>
      </table>
    </>
  )
}

export default DealerList
