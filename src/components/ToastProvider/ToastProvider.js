import React from "react"
import {useEscapeKey} from '../../hooks/useEscapeKey'

export const ToastsContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const handleEscape = React.useCallback(() => setToasts([]), [])
  useEscapeKey(handleEscape)

  // make createToast fn
  const createToast = (message, variant) => {
    const id = window.crypto.randomUUID()
    setToasts([...toasts, { variant, message, id }])
  }

  // make dismissToast fn
  const dismissToast = (id) => {
    const nextToasts = toasts.filter((obj) => obj.id !== id)
    setToasts(nextToasts)
  }

  return (
    <ToastsContext.Provider value={{ toasts, dismissToast, createToast }}>
      {children}
    </ToastsContext.Provider>
  )
}

export default ToastProvider
