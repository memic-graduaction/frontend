import React from 'react';
import { useSetRecoilState } from 'recoil';
import { scriptIDstate, scriptSentencestate } from 'src/recoil/states';
import { useModalStack } from 'src/utils/useModalStack';
import * as S from './Styles';
import ModalSpeech from '../Modal/ModalSpeech';
import { ModalStack } from '../Modal/Modal';

type Props = {
  id: number;
  sentence: string;
};

function RecButton({ id, sentence }: Props) {
  const setScriptIDState = useSetRecoilState(scriptIDstate);
  const setScriptSentencestate = useSetRecoilState(scriptSentencestate);
  const modalStack = useModalStack();

  const handleRightLayoutClick = () => {
    setScriptIDState(id);
    setScriptSentencestate(sentence);
    modalStack.push({
      key: 'modal-speech',
      Component: ModalSpeech,
    });
  };

  return (
    <>
      <ModalStack />
      <S.RightLayout onClick={() => handleRightLayoutClick()}>
        <S.RecordIcon />
        <S.RecordText>Rec</S.RecordText>
      </S.RightLayout>
    </>
  );
}

export default RecButton;
