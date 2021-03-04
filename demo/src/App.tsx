import React, { useState } from 'react';
import ReportUserModal from './modals/ReportUserModal';
import LongTextModal from './modals/LongTextModal';
import NoTitleNoFooterModal from './modals/NoTitleNoFooterModal';
import LargeModal from './modals/LargeModal';
import DarkModeModal from './modals/DarkModeModal';

function App() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isLongTxtModalOpen, setIsLongTxtModalOpen] = useState(false);
  const [isNoTitleModalOpen, setIsNoTitleModalOpen] = useState(false);
  const [isLargeModalOpen, setIsLargeModalOpen] = useState(false);
  const [isDarkModalOpen, setIsDarkModalOpen] = useState(false);

  return (
    <div className="App">
      <a
        href="https://github.com/wassimbj/nice-react-modal"
        className="text-center block py-3 font-semibold text-gray-700 hover:text-black"
      >
        Github
      </a>
      <div className="max-w-lg my-10 mx-auto border border-gray-300 rounded-lg p-5">
        <div className="mb-5">
          <p className="text-center font-semibold"> Modal examples </p>
          <p className="text-center text-sm text-gray-500">
            (Click the buttons)
          </p>
        </div>

        <span
          className="m-2 cursor-pointer rounded-lg px-5 py-2 bg-blue-500 text-white inline-block"
          onClick={() => setIsReportModalOpen(true)}
        >
          Report user
        </span>
        <span
          className="m-2 cursor-pointer rounded-lg px-5 py-2 bg-blue-500 text-white inline-block"
          onClick={() => setIsLongTxtModalOpen(true)}
        >
          Long text...
        </span>
        <span
          className="m-2 cursor-pointer rounded-lg px-5 py-2 bg-blue-500 text-white inline-block"
          onClick={() => setIsNoTitleModalOpen(true)}
        >
          No title No footer
        </span>
        <span
          className="m-2 cursor-pointer rounded-lg px-5 py-2 bg-blue-500 text-white inline-block"
          onClick={() => setIsLargeModalOpen(true)}
        >
          Large modal
        </span>
        <span
          className="m-2 cursor-pointer rounded-lg px-5 py-2 bg-blue-500 text-white inline-block"
          onClick={() => setIsDarkModalOpen(true)}
        >
          Dark mode modal
        </span>
      </div>

      {isReportModalOpen && (
        <ReportUserModal onClose={() => setIsReportModalOpen(false)} />
      )}
      {isLongTxtModalOpen && (
        <LongTextModal onClose={() => setIsLongTxtModalOpen(false)} />
      )}
      {isNoTitleModalOpen && (
        <NoTitleNoFooterModal onClose={() => setIsNoTitleModalOpen(false)} />
      )}
      {isLargeModalOpen && (
        <LargeModal onClose={() => setIsLargeModalOpen(false)} />
      )}
      {isDarkModalOpen && (
        <DarkModeModal onClose={() => setIsDarkModalOpen(false)} />
      )}
    </div>
  );
}

export default App;
