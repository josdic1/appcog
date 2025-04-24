function EditCard({ name, value, onChange }) {
    return (
      <div>
        <label>{name}</label>
        <input
          name={name}
          value={value}
          onChange={(e) => {
            const { name, value } = e.currentTarget
            onChange(name, value)
          }}
        />
      </div>
    )
  }
  
  export default EditCard
  