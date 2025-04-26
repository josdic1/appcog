import { useEffect, useState } from "react"

function DealerFilter({ brands, filterObject, setFilterObject }) {
  const [brandArray, setBrandArray] = useState([])

  useEffect(() => {
    const brandArrayData = brands.map(brand => (
      <option key={brand.id} value={brand.name}>
        {brand.name}
      </option>
    ))
    setBrandArray(brandArrayData)
  }, [brands])

  const onChange = (e) => {
    const { name, value } = e.currentTarget
    setFilterObject(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onClear = () => {
    setFilterObject({ text: "", select: "all" })
  }

  return (
    <>
      <label htmlFor="text">Text Search: </label>
      <input
        id="text"
        name="text"
        onChange={onChange}
        value={filterObject.text}
        placeholder="Search by name"
      />
      <br />

      <label htmlFor="select">Brands: </label>
      <select
        id="select"
        name="select"
        onChange={onChange}
        value={filterObject.select}
      >
        <option value="all">Choose Brand...</option>
        {brandArray}
      </select>
      <br />

      <button type="button" onClick={onClear}>
        Clear
      </button>
    </>
  )
}

export default DealerFilter
