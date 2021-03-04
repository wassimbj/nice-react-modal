> a simple react modal component

[Demo](https://nice-react-modal.vercel.app)

### Install
```bash
npm i nice-react-modal
```

### components available
```js
import {Modal, ModalBody, ModalTitle, ModalFooter} from 'nice-react-modal';
```

### Usage

example of report user modal  
</br>

```js
// ReportUserModal.js file
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

// App.js file
import { useState } from "react";
import ReportUserModal from './components/ReportUserModal'

function App() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  return (
    <div>
      <span onClick={() => setIsReportModalOpen(true)}> Report user </span>
      {isReportModalOpen && <ReportUserModal onClose={() => setIsReportModalOpen(false)} />}
    </div>
  );
}
```

*you can find the other examples in demo, in the github repo*

## Props
  ### Modal
  - **onClose** `() => void`
  - **size**? `"md" | "lg"`
  - **darkMode**? `boolean` default is false

