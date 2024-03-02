import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import Modal from 'src/components/Modal/Modal';
import { recordingState } from 'src/recoil/states';

function RecordPage() {
  const [isOpen, setIsOpen] = useState(false);
  const setRecordStatus = useSetRecoilState(recordingState);
  function handleOpenModal() {
    setIsOpen(true);
    setRecordStatus('inactive');
  }
  function handleCloseModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <h1>임시 레코드 페이지</h1>
      <button type="button" onClick={handleOpenModal}>
        모달열기 버튼
      </button>
      {isOpen && <Modal onClose={() => handleCloseModal()} />}
    </div>
  );
}

export default RecordPage;
