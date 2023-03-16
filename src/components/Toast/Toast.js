import React from "react"
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather"

import VisuallyHidden from "../VisuallyHidden"

import styles from "./Toast.module.css"

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast({ variant, children, dismissToast, id }) {
  const IconTag = ICONS_BY_VARIANT[variant]

  // onClick of X, I want to remove the toast from the toast state

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <IconTag size={24} />
      </div>
      <p className={styles.content}>
        {children}
        <VisuallyHidden>{children}</VisuallyHidden>
      </p>
      <button className={styles.closeButton}>
        <X size={24} onClick={() => dismissToast(id)} />
        <VisuallyHidden aria-label="Dismiss message" aria-live="off">
          Dismiss message
        </VisuallyHidden>
      </button>
    </div>
  )
}

export default Toast
