import React from 'react';
import { Close } from 'src/utils/Icons';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { modalActivationState, modalStackState, recordingState } from 'src/recoil/states';
import { useModalStack } from 'src/utils/useModalStack';
import { ModalStateType } from 'src/recoil/types';
import { ModalPortal } from './ModalPortal';
import * as S from './Styles';

type ModalProps = {
  modal: ModalStateType;
};

function Modal({ modal }: ModalProps) {
  const { Component, Props, popOnce, popTwice } = modal;
  const { pop, clear } = useModalStack();
  const setIsModalOpen = useSetRecoilState(modalActivationState);
  const setRecordingStatus = useSetRecoilState(recordingState);
  const close = () => {
    if (popOnce) pop();
    else if (popTwice) {
      pop();
      pop();
    } else {
      clear();
      setIsModalOpen(false);
    }
    setRecordingStatus('inactive');
  };

  return (
    <ModalPortal>
      <S.ModalLayout>
        <S.ModalBody>
          <S.ExitBtn onClick={close}>
            <Close />
          </S.ExitBtn>
          <Component {...Props} />
        </S.ModalBody>
      </S.ModalLayout>
    </ModalPortal>
  );
}

export function ModalStack() {
  const modalStack = useRecoilValue(modalStackState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalActivationState);
  const setRecordingStatus = useSetRecoilState(recordingState);
  const { clear } = useModalStack();
  const close = () => {
    setIsModalOpen(false);
    setRecordingStatus('inactive');
    clear();
  };
  return (
    <>
      {isModalOpen ? <S.BackLayout onClick={close} /> : null}
      {modalStack.map((modal) => (
        <Modal modal={modal} />
      ))}
    </>
  );
}

export default Modal;
