import React from "react"

function RadioInput({value}) {
  const [radioValue, setRadioValue] = React.useState('');

  // when I create a new instance of this component
  // each time I will have the same id and that is not ok.

  const instanceID = React.useId();
  
  return (
    <label htmlFor={instanceID}>
      <input
        id={instanceID}
        type="radio"
        name="variant"
        value="notice"
        onChange={(e) => setRadioValue(e.target.value)}
        checked={radioValue === "notice"}
      />
      {value}
    </label>
  )
}

export default RadioInput
