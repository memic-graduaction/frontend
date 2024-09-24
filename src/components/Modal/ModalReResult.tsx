/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import styled from 'styled-components';
import { Checkmark } from 'react-checkmark';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { recordingState, secondAudioUrl } from 'src/recoil/states';
import { useModalStack } from 'src/utils/useModalStack';
import ReSpeechBtn from './ModalButtons/ReSpeechBtn';
import PlaySpeechBtn from './ModalButtons/PlaySpeechBtn';
import { TitleBox } from './Styles';

interface Prop {
  word: string;
  isMatched: boolean;
}

function ModalReResult({ word, isMatched }: Prop) {
  const setRecordStatus = useSetRecoilState(recordingState);
  const { pop } = useModalStack();
  const audioUrl = useRecoilValue(secondAudioUrl);

  const handleClickReSpeech = () => {
    setRecordStatus('inactive');
    pop();
  };
  return (
    <Layout>
      {isMatched ? (
        <>
          <TitleBox>* 단어를 완벽하게 발음했어요!</TitleBox>
          <TextBox>
            <IconLayout>
              <Checkmark size="large" color="#1FD199" />
            </IconLayout>
            <MatchedText>{word}</MatchedText>
          </TextBox>
        </>
      ) : (
        <Layout>
          <TitleBox>* AI가 내 발음을 이렇게 평가했어요!</TitleBox>
          <MisMatchText>{word}</MisMatchText>
        </Layout>
      )}
      <BtnLayout>
        <PlaySpeechBtn url={audioUrl} />
        <ReSpeechBtn onClick={handleClickReSpeech} />
      </BtnLayout>
    </Layout>
  );
}

export default ModalReResult;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`;

const MatchedText = styled.div`
  word-break: break-all;
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  color: #1fd199;
  gap: 1.5rem;
`;

const MisMatchText = styled(MatchedText)`
  color: #ea4e4e;
`;

const IconLayout = styled.div`
  margin-top: 1rem;
`;

const BtnLayout = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 1.5rem;
`;
