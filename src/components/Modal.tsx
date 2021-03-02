import React from 'react'

interface Props {
   children: any;
   onClose: () => void;
   size?: 'md' | 'lg'
}

export default function Modal({ children, size, onClose }: Props) {
   return (
      <div className="modal-wrapper">
         <div className="layer" onClick={onClose} />
         <div className={`modal-container ${size}`}>
            <div className="modal-content-wrapper">
               { children }
            </div>
         </div>
      </div>
   )
}
