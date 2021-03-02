> a simple react modal component

[Demo](https://nice-react-modal.vercel.app)

### Install
```bash
npm i nice-react-modal
```

### components available
```js
import {Modal, ModalBody, Title, ModalFooter} from 'nice-react-modal';
```

### Usage

example of report user modal  
</br>

```js
// ReportUserModal.js file
import React from 'react'
import {Modal, ModalBody, Title, ModalFooter} from 'nice-react-modal';

export default function ReportUserModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <Title> Report user </Title>
      <ModalBody>
        <form id="reportForm">
          <p style={{ textAlign: 'center' }}>Are you sure you want to report this user ?</p>
        </form>
      </ModalBody>
      <ModalFooter>
        <span className="cancelbtn" onClick={onClose}> Cancel </span>
        <button type="submit" className="reportbtn" form="reportForm"> Yes, report </button>
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
