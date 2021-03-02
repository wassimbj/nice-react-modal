import React from 'react'
import { Modal, ModalBody } from 'nice-react-modal'

interface Props {
   onClose: () => void
}

export default function NoTitleNoFooterModal({ onClose }: Props) {
   return (
      <Modal onClose={onClose}>
         <ModalBody>
            Hey, this is an example of a modal without title and footer, is it good ?
         </ModalBody>
      </Modal>
   )
}
