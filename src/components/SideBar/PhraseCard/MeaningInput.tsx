import React, { useState } from 'react';
import * as S from './Styles';

interface Props {
  defaultMean: string;
  setMeaning: (arg1: string) => void;
}

const MeaningInput = ({ defaultMean, setMeaning }: Props) => {
  const [current, setCurrent] = useState(defaultMean);

  const onChange = (e) => {
    setCurrent(e.target.value);
  };

  const onBlur = (e) => {
    setCurrent(e.target.value);
    setMeaning(current);
  };

  return (
    <S.InputBox>
      <S.Input defaultValue={defaultMean} onChange={onChange} onBlur={onBlur} />
    </S.InputBox>
  );
};

export default MeaningInput;
