import React from 'react';
import { useSetRecoilState } from 'recoil';
import { modalActivationState, scriptIDstate, scriptSentencestate } from 'src/recoil/states';
import * as S from './Styles';

type Props = {
  id: number;
  sentence: string;
};

function RecButton({ id, sentence }: Props) {
  const setScriptIDState = useSetRecoilState(scriptIDstate);
  const setScriptSentencestate = useSetRecoilState(scriptSentencestate);
  const setIsModalOpen = useSetRecoilState(modalActivationState);

  const handleRightLayoutClick = () => {
    setScriptIDState(id);
    setScriptSentencestate(sentence);
    setIsModalOpen(true);
  };

  return (
    <S.RightLayout onClick={() => handleRightLayoutClick()}>
      <S.RecordIcon />
      <S.RecordText>Rec</S.RecordText>
    </S.RightLayout>
  );
}

export default RecButton;
