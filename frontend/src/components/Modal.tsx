import React from 'react'

interface ModalProps {
  children: React.ReactNode
  title: string 
  onClose: () => void
}

export function Modal({children, title, onClose}: ModalProps) {
  return (
    <>
      <div
        className = "fixed bg-black/50 left-0 top-[10%] w-full h-full" onClick={onClose}
      />

      {/* <div
        className="fixed w-[500px] p-5 rounded bg-white top-[20%] left-1/2 -translate-x-1/2 "
      >
        <h1 className="text-lg text-center mb-2">{ title }</h1> */}
        {children}
      {/* </div> */}

      

    </>
    
     
    
  )
}