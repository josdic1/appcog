import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import DealerContext from "../contexts/DealerContext"
import BrandContext from "../contexts/BrandContext"
import BrandCard from "../components/BrandCard"

function DealerForm() {
    const { inEditMode, selectedDealer, handleAdd, handleUpdate } = useContext(DealerContext)
    const { brands } = useContext(BrandContext)
  
    const [formData, setFormData] = useState({
      dealer_name: "",
      owner: "",
      usercode: "",
      passcode: "",
      dealer_id: "",
      email: "",
      brands: [],
    })
  
    const [brandsArray, setBrandsArray] = useState([])
  
    useEffect(() => {
      if (inEditMode && selectedDealer) {
        setFormData({
          dealer_name: selectedDealer.dealer_name || "",
          owner: selectedDealer.owner || "",
          usercode: selectedDealer.usercode || "",
          passcode: selectedDealer.passcode || "",
          dealer_id: selectedDealer.dealer_id || "",
          email: selectedDealer.email || "",
          brands: selectedDealer.brands || [],
        })
  
        // Prepopulate checked brands
        const checkedBrands = brands
          .filter(b => selectedDealer.brands.includes(b.name))
          .map(b => ({ id: b.id, name: b.name, checked: true }))
  
        setBrandsArray(checkedBrands)
      }
    }, [inEditMode, selectedDealer, brands])
  
const navigate = useNavigate()

    const brandList = brands.map(brand => {
        const isChecked = brandsArray.some(b => b.id === brand.id)
      
        return (
          <BrandCard
            key={brand.id}
            brand={brand}
            checked={isChecked}
            handleCheck={handleCheck}
          />
        )
      })

function handleCheck(obj) {
    if (obj.checked) {
      setBrandsArray(prev => [...prev, obj])
    } else {
      setBrandsArray(prev => prev.filter(b => b.id !== obj.id))
    }
  }

  const onFormChange = (e) => {
    const { name, value } = e.currentTarget
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }
console.log(selectedDealer)
  const clearForm = () => {
    setFormData({
      dealer_name: "",
      owner: "",
      usercode: "",
      passcode: "",
      dealer_id: "",
      email: "",
      brands: [],
    })
    setBrandsArray([])
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const brandsList = brandsArray.map(b => b.name)

    const payload = {
      ...formData,
      brands: brandsList,
      // created_by: 
    }

    if (inEditMode) {
      handleUpdate({ ...payload, id: selectedDealer.id })
    } else {
      handleAdd(payload)
    }
    navigate('/home')
    clearForm()
  }
  

return (
<>
<form onSubmit={onSubmit}>
    <label htmlFor="dealer_name">dealer_name</label>
    <input type='text' name='dealer_name' onChange={onFormChange} placeholder="Dealer name..." value={formData.dealer_name} />

    <label htmlFor="owner">owner</label>
    <input type='text' name='owner' onChange={onFormChange} placeholder="Owner..." value={formData.owner} />

    <label htmlFor="usercode">usercode</label>
    <input type='text' name='usercode' onChange={onFormChange} placeholder="Usercode..." value={formData.usercode} />

    <label htmlFor="passcode">passcode</label>
    <input type='text' name='passcode' onChange={onFormChange} placeholder="Passcode..." value={formData.passcode} />

    <label htmlFor="dealer_id">dealer_id</label>
    <input type='text' name='dealer_id' onChange={onFormChange} placeholder="Dealer Id..." value={formData.dealer_id} />

    <label htmlFor="email">email</label>
    <input type='email' name='email' onChange={onFormChange} placeholder="Email..." value={formData.email} />

    <label htmlFor="brands">brands</label>
    <fieldset>
  <legend>Brands</legend>
  {brandList}
</fieldset>

    <button type="submit">{inEditMode ? "Update" : "Create"}</button>
    <button type="button" name='clear' onClick={clearForm}>Clear</button>
</form>
</>
)}

export default DealerForm
