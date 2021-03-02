import React from 'react'

interface Props {
   children: any
}

export default function ModalTitle({ children }: Props) {
   return (
      <div className="modal-title">
         {children}
      </div>
   )
}
