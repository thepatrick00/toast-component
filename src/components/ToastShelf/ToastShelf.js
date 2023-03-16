import React from "react"

import Toast from "../Toast"
import styles from "./ToastShelf.module.css"
import { ToastsContext } from "../ToastProvider"


function ToastShelf() {
  // toasts = [{}], obj properties: variant, message, dismissToast, id

  // dismissToast does nothing right now
  const { toasts, dismissToast } = React.useContext(ToastsContext)

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast
              variant={toast.variant}
              dismissToast={dismissToast}
              id={toast.id}
            >
              {toast.message}
            </Toast>
          </li>
        )
      })}
    </ol>
  )
}

export default ToastShelf
