import React from 'react';
import { Close } from 'src/utils/Icons';
import * as S from './Styles';
import { ModalPortal } from './ModalPortal';
// import ModalLoading from './ModalLoading';
// import ModalSpeech from './ModalSpeech';
import ModalResult from './ModalResult';

interface Props {
  onClose: () => void;
}

function Modal({ onClose }: Props) {
  return (
    <ModalPortal>
      <S.BackLayout onClick={() => onClose()} />
      <S.ModalLayout>
        <S.ModalBody>
          <S.ExitBtn onClick={() => onClose()}>
            <Close />
          </S.ExitBtn>
          <ModalResult />
        </S.ModalBody>
      </S.ModalLayout>
    </ModalPortal>
  );
}

export default Modal;
