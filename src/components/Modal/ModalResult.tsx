/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { incorrectWordsSelector } from 'src/recoil/selectors';
import { audioUrlState, recognizedSentence, recordingState, scriptSentencestate } from 'src/recoil/states';
import { Microphone, PlayBtn } from 'src/utils/Icons';
import styled from 'styled-components';

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
        <TextTitle>*&nbsp;기존 문장</TextTitle>
        <OriginalText>{originalStr}</OriginalText>
      </TextContainer>
      <TextContainer>
        <TextTitle>*&nbsp;내가 말한 문장</TextTitle>
        <TextBox>
          {recognizedStr.map((v, i) =>
            incorrectIdx.includes(i) ? <WrongText>{v}&nbsp;</WrongText> : <ResultText>{v}&nbsp;</ResultText>,
          )}
        </TextBox>
      </TextContainer>
      <BtnLayout>
        <BtnBox
          onClick={() => {
            setIsPlay(true);
          }}
        >
          <PlayBtn />
          나의 발음 듣기
        </BtnBox>
        <BtnBox
          onClick={() => {
            setRecordStatus('inactive');
          }}
        >
          <Microphone width="27px" height="27px" />
          다시 녹음하기
        </BtnBox>
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

const TextTitle = styled.div`
  width: 100%;
  color: #433e49;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 1rem;
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
  font-weight: 300;
  line-height: 1.3;
`;

const ResultText = styled(OriginalText)`
  font-size: 1.3rem;
  line-height: 1.5;
  padding: 0;
`;

const WrongText = styled(ResultText)`
  color: #ff5c5c;
`;

const BtnLayout = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 2rem;
`;

const BtnBox = styled.button`
  width: 11.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4375rem;
  box-shadow: 1px 1px 5px 0px rgba(16, 16, 16, 0.25);
  gap: 0.5rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 350;
`;
