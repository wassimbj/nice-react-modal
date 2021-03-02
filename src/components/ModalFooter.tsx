import React from 'react'

interface Props {
   children: any
}

export default function ModalFooter({ children }: Props) {
   return (
      <div className="modal-footer">
         {children}
      </div>
   )
}
