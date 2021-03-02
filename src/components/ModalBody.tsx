import React from 'react'

interface Props {
   children: any
}

export default function ModalBody({children}: Props) {
   return (
      <div className="modal-body-wrapper">
         <div className="modal-body">
            {children}
         </div>
      </div>
   )
}
