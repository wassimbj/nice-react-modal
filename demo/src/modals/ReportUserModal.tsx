import React from 'react'
import { Modal, ModalTitle, ModalBody, ModalFooter } from 'nice-react-modal'

interface Props {
   onClose: () => void
}

export default function ReportUserModal({ onClose }: Props) {
   return (
      <Modal onClose={onClose}>
         <ModalTitle>Report</ModalTitle>
         <ModalBody>
            <form id="reportForm">
               <p style={{ textAlign: 'center' }}>Are you sure you want to report this user ?</p>
            </form>
         </ModalBody>
         <ModalFooter>
         <span className="px-5 py-2 bg-gray-200 text-gray-600 hover:bg-gray-300 transition rounded-full cursor-pointer" onClick={onClose}> Cancel </span>
         <button type="submit" className="px-5 py-2 bg-red-500 hover:bg-red-600 transition text-white rounded-full" form="reportForm"> Yes, report </button>
         </ModalFooter>
      </Modal>
   )
}
