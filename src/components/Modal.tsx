import React from 'react'

interface Props {
   children: any;
   onClose: () => void;
   size?: 'md' | 'lg',
   darkMode?: boolean
}

export default function Modal({ children, size, onClose, darkMode }: Props) {
   return (
      <div className="modal-wrapper">
         <div className="layer" onClick={onClose} />
         <div className={`modal-container ${size} ${darkMode ? 'darkMode' : ''}`}>
            <div className="modal-content-wrapper">
               { children }
            </div>
         </div>
      </div>
   )
}
