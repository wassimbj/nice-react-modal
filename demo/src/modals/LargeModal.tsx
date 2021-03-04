import React from 'react'
import { Modal, ModalBody } from 'nice-react-modal'

interface Props {
   onClose: () => void
}

export default function LargeModal({ onClose }: Props) {
   return (
      <Modal onClose={onClose} size="lg">
         <ModalBody>
            <p className="text-center">
               This is a large modal example
            </p>
         </ModalBody>
      </Modal>
   )
}
