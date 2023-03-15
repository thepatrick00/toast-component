import React from "react"

import Button from "../Button"
import Header from "../Header"
import RadioInput from "../RadioInput"

import styles from "./ToastPlayground.module.css"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

function ToastPlayground() {
  // make controlled components | textarea✔ | radios
  const [message, setMessage] = React.useState("")
  const [radioVariant, setRadioVariant] = React.useState("notice")

  // my problem is RadioInput changes the state in 1 click, but updates
  // in 2
  // then when I type the RadioInput changes back to the original state
  // of notice, instead of staying.

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              return (
                <RadioInput
                  key={option}
                  option={option}
                  radioVariant={radioVariant}
                  setRadioVariant={setRadioVariant}
                />
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToastPlayground
