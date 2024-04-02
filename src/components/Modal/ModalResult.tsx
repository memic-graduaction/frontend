/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { incorrectWordsSelector } from 'src/recoil/selectors';
import { audioUrlState, recognizedSentence, recordingState, scriptSentencestate } from 'src/recoil/states';
import styled from 'styled-components';
import { Checkmark } from 'react-checkmark';
import PlaySpeechBtn from './ModalButtons/PlaySpeechBtn';
import ReSpeechBtn from './ModalButtons/ReSpeechBtn';

function ModalResult() {
  const [isPlay, setIsPlay] = useState(false);
  const audioUrl = useRecoilValue(audioUrlState);
  const setRecordStatus = useSetRecoilState(recordingState);
  const originalStr = useRecoilValue(scriptSentencestate);
  const recognizedStr = useRecoilValue(recognizedSentence).split(' ');
  const incorrectIdx = useRecoilValue(incorrectWordsSelector);

  return (
    <Layout>
      <TextContainer>
        <OriginalTextTitle>* 기존 문장</OriginalTextTitle>
        <OriginalText>{originalStr}</OriginalText>
      </TextContainer>
      <TextContainer>
        <ResultTextTitle>* 내가 말한 문장</ResultTextTitle>
        {!incorrectIdx.length ? (
          <TextBox>
            <IconBox>
              <Checkmark size="small" color="#0AC78E" />
            </IconBox>
            {recognizedStr.map((v) => (
              <CorrectText>{v}&nbsp;</CorrectText>
            ))}
          </TextBox>
        ) : (
          <TextBox>
            {recognizedStr.map((v, i) =>
              incorrectIdx.includes(i) ? <WrongText>{v}&nbsp;</WrongText> : <ResultText>{v}&nbsp;</ResultText>,
            )}
          </TextBox>
        )}
      </TextContainer>
      <BtnLayout>
        <PlaySpeechBtn onClick={() => setIsPlay(true)} />
        <ReSpeechBtn onClick={() => setRecordStatus('inactive')} />
      </BtnLayout>
      {audioUrl && isPlay ? <audio src={audioUrl} autoPlay /> : null}
    </Layout>
  );
}

export default ModalResult;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;

const TextContainer = styled.div`
  width: 42rem;
`;

const OriginalTextTitle = styled.div`
  width: 100%;
  color: #6a6a6a;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const ResultTextTitle = styled(OriginalTextTitle)`
  color: #ff5c5c;
`;

const TextBox = styled.div`
  width: 42rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 0.9375rem;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.25);
  padding: 2rem;
`;

const OriginalText = styled.div`
  padding-left: 1rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
`;

const ResultText = styled(OriginalText)`
  color: black;
  font-size: 1.25rem;
  line-height: 1.5;
  padding: 0;
`;

const WrongText = styled(ResultText)`
  color: #ff5c5c;
  font-weight: 500;
`;

const CorrectText = styled(ResultText)`
  color: #0ac78e;
`;

const BtnLayout = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 2rem;
`;

const IconBox = styled.div`
  margin-right: 0.5rem;
`;
