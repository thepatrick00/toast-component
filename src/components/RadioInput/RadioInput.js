import React from "react"

function RadioInput({option, variant, setVariant}) {
  const instanceID = React.useId();
  
  return (
    <>
      <label htmlFor={instanceID}>
        <input
          id={instanceID}
          type="radio"
          name="variant-group"
          value={option}
          onChange={(e) => setVariant(e.target.value)}
          checked={variant === option}
        />
        {option}
      </label>
    </>
  )
}

export default React.memo(RadioInput)
