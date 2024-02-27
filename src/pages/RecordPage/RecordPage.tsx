import React, { useState } from 'react';
import Modal from 'src/components/Modal/Modal';

function RecordPage() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenModal() {
    setIsOpen(true);
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
