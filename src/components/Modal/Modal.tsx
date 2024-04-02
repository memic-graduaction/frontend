import React from 'react';
import { Close } from 'src/utils/Icons';
import { useRecoilValue } from 'recoil';
import { modalStackState } from 'src/recoil/states';
import { useModalStack } from 'src/utils/useModalStack';
import { ModalStateType } from 'src/recoil/types';
import { ModalPortal } from './ModalPortal';
import * as S from './Styles';

type ModalProps = {
  modal: ModalStateType;
};

function Modal({ modal }: ModalProps) {
  const { Component, Props } = modal;
  const { clear } = useModalStack();
  const close = () => clear();
  console.log(modal);
  return (
    <ModalPortal>
      <S.BackLayout onClick={close} />
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
  return (
    <>
      {modalStack.map((modal) => (
        <Modal modal={modal} />
      ))}
    </>
  );
}

export default Modal;
