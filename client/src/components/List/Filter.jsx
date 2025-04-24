

function Filter({ onFilterChange, filterObj }) {

    const onChange = (e) => {
        const {name, value} = e.currentTarget
        if(name === 'text') {
            onFilterChange(value)
        } else {
            if(name === 'clear') {
                onFilterChange("")
            } 
        }
      }

return (
<>
<label htmlFor="text">Text Search: </label>
    <input type='text' name='text' value={filterObj.text} onChange={onChange}placeholder="Type to search..." />
<button type='button' name='clear' onClick={onChange}>Clear</button>
</>
)}

export default Filter
