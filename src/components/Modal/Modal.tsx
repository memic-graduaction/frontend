import React from 'react';
import { Close } from 'src/utils/Icons';
import { useRecoilValue } from 'recoil';
import { recordingState } from 'src/recoil/states';
import * as S from './Styles';
import { ModalPortal } from './ModalPortal';
import ModalSpeech from './ModalSpeech';
import ModalResult from './ModalResult';
import ModalLoading from './ModalLoading';

interface Props {
  onClose: () => void;
}

function Modal({ onClose }: Props) {
  const recordingStatus = useRecoilValue(recordingState);
  const chooseModal = () => {
    switch (recordingStatus) {
      case 'completed':
        return <ModalResult />;
      case 'loading':
        return <ModalLoading />;
      default:
        return <ModalSpeech />;
    }
  };
  return (
    <ModalPortal>
      <S.BackLayout onClick={() => onClose()} />
      <S.ModalLayout>
        <S.ModalBody>
          <S.ExitBtn onClick={() => onClose()}>
            <Close />
          </S.ExitBtn>
          <>{chooseModal()}</>
        </S.ModalBody>
      </S.ModalLayout>
    </ModalPortal>
  );
}

export default Modal;
