import React from 'react'

interface ModalProps {
  children: React.ReactNode
  transparency?: boolean
  onClose: () => void
}

export function Modal({children, onClose, transparency}: ModalProps) {
  return (
    <>
      <div
        className = "fixed z-70 bg-black/50 left-0 top-0 w-full h-full" onClick={onClose}
      >
        
        {children}
      </div>
    </>
    
     
    
  )
}