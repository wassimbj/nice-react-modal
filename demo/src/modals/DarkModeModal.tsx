import React from 'react'
import { Modal, ModalBody } from 'nice-react-modal'

interface Props {
   onClose: () => void
}

export default function DarkModeModal({ onClose }: Props) {
   return (
      <Modal onClose={onClose} darkMode>
         <ModalBody>
            <p className="text-center">
            Example of nice-react-modal in dark mode...
            </p>
         </ModalBody>
      </Modal>
   )
}
