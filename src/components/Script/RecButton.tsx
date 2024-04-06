import React from 'react';
import { useSetRecoilState } from 'recoil';
import { modalActivationState, scriptIDstate, scriptSentencestate } from 'src/recoil/states';
import { useModalStack } from 'src/utils/useModalStack';
import * as S from './Styles';
import ModalSpeech from '../Modal/ModalSpeech';

type Props = {
  id: number;
  sentence: string;
};

function RecButton({ id, sentence }: Props) {
  const setScriptIDState = useSetRecoilState(scriptIDstate);
  const setScriptSentencestate = useSetRecoilState(scriptSentencestate);
  const setIsModalOpen = useSetRecoilState(modalActivationState);
  const { push } = useModalStack();

  const handleButtonClick = () => {
    setScriptIDState(id);
    setScriptSentencestate(sentence);
    setIsModalOpen(true);
    push({
      key: 'modal-speech',
      Component: ModalSpeech,
    });
  };

  return (
    <S.RecBtnLayout onClick={() => handleButtonClick()}>
      <S.RecordIcon />
      <S.RecordText>Rec</S.RecordText>
    </S.RecBtnLayout>
  );
}

export default RecButton;
