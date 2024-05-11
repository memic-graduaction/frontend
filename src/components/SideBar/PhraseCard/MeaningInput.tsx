import React, { useState } from 'react';
import * as S from './Styles';

interface Props {
  defaultMean: string;
  setMeaning: (arg1: string) => void;
}

const MeaningInput = ({ defaultMean, setMeaning }: Props) => {
  const [current, setCurrent] = useState('');
  const [finalMean, setFinalMean] = useState('');
  const [isSave, setIsSave] = useState(false);

  const onChange = (e) => {
    setCurrent(e.target.value);
  };

  const handleSaveButton = (e) => {
    setCurrent(e.target.value);
    setIsSave(true);
    if (current.length === 0) {
      setFinalMean(defaultMean);
      setMeaning(defaultMean);
    } else {
      setFinalMean(current);
      setMeaning(current);
    }
  };

  return isSave ? (
    <S.MeaningBox>{finalMean}</S.MeaningBox>
  ) : (
    <S.InputBox>
      <S.Input placeholder={defaultMean} onChange={onChange} />
      <S.SubmitBtn onClick={handleSaveButton}>입력</S.SubmitBtn>
    </S.InputBox>
  );
};

export default MeaningInput;
