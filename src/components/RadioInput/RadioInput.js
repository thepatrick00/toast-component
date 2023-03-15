import React from "react"

function RadioInput({option, radioVariant, setRadioVariant}) {

  console.log({radioVariant})
  const instanceID = React.useId();
  
  return (
    <>
      {/* <p>{radioVariant || undefined}</p> */}
      <label htmlFor={instanceID}>
        <input
          id={instanceID}
          type="radio"
          name="variant-group"
          value={option}
          onChange={(e) => setRadioVariant(e.target.value)}
          checked={radioVariant === option}
        />
        {option}
      </label>
    </>
  )
}

export default React.memo(RadioInput)
