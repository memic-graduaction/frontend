import React from 'react';
import { Close } from 'src/utils/Icons';
import { useRecoilValue } from 'recoil';
import { recordingState } from 'src/recoil/states';
import * as S from './Styles';
import { ModalPortal } from './ModalPortal';
import ModalSpeech from './ModalSpeech';
// import ModalLoading from './ModalLoading';
import ModalResult from './ModalResult';

interface Props {
  onClose: () => void;
}

function Modal({ onClose }: Props) {
  const recordingStatus = useRecoilValue(recordingState);
  return (
    <ModalPortal>
      <S.BackLayout onClick={() => onClose()} />
      <S.ModalLayout>
        <S.ModalBody>
          <S.ExitBtn onClick={() => onClose()}>
            <Close />
          </S.ExitBtn>
          {recordingStatus === 'completed' ? <ModalResult /> : <ModalSpeech />}
        </S.ModalBody>
      </S.ModalLayout>
    </ModalPortal>
  );
}

export default Modal;
