import React from 'react';
import { Close } from 'src/utils/Icons';
import * as S from './Styles';
import { ModalPortal } from './ModalPortal';

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
          모달 바디
        </S.ModalBody>
      </S.ModalLayout>
    </ModalPortal>
  );
}

export default Modal;
