

function DealerVariableInputGroup({ variables, variableList }) {
    return variables.map((key) => {
      const match = variableList.find((v) => v.key === key)
      return match ? (
        <div key={match.key}>
          <label htmlFor={match.label}>{match.label}</label>
          <input
            type={match.type}
            name={match.label}
            placeholder={match.label}
          />
        </div>
      ) : null
    })
  }
  
  export default DealerVariableInputGroup
  