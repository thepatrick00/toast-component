import React from "react"

import Button from "../Button"
import Header from "../Header"
import RadioInput from "../RadioInput"
import ToastShelf from "../ToastShelf"

import { ToastsContext } from "../ToastProvider"

import styles from "./ToastPlayground.module.css"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

function ToastPlayground() {
  const [message, setMessage] = React.useState("")
  const [variant, setVariant] = React.useState("notice")

  const {createToast} = React.useContext(ToastsContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createToast(message, variant)

    // reset
    setMessage("")
    setVariant(VARIANT_OPTIONS[0])
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <ToastShelf/>

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
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
                  variant={variant}
                  setVariant={setVariant}
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
      </form>
    </div>
  )
}

export default ToastPlayground
