/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Checkmark } from 'react-checkmark';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { recordingState, secondAudioUrl } from 'src/recoil/states';
import { useModalStack } from 'src/utils/useModalStack';
import ReSpeechBtn from './ModalButtons/ReSpeechBtn';
import PlaySpeechBtn from './ModalButtons/PlaySpeechBtn';

interface Prop {
  word: string;
}

function ModalReResult({ word }: Prop) {
  const setRecordStatus = useSetRecoilState(recordingState);
  const { pop } = useModalStack();
  const audioUrl = useRecoilValue(secondAudioUrl);
  const [isPlay, setIsPlay] = useState(false);

  const handleClickReSpeech = () => {
    setRecordStatus('inactive');
    pop();
  };
  return (
    <Layout>
      <TextLayout>
        {word}
        <IconLayout>
          <Checkmark size="large" color="#0AC78E" />
        </IconLayout>
      </TextLayout>
      <BtnLayout>
        <PlaySpeechBtn
          onClick={() => {
            setIsPlay(true);
          }}
        />
        <ReSpeechBtn onClick={handleClickReSpeech} />
      </BtnLayout>
      {audioUrl && isPlay ? <audio src={audioUrl} autoPlay /> : null}
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
  gap: 3rem;
`;

const TextLayout = styled.div`
  width: 42rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.9375rem;
  padding-bottom: 1rem;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.25);
  font-size: 6.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
  color: #0ac78e;
  gap: 1.5rem;
`;

const IconLayout = styled.div`
  padding-top: 1.5rem;
`;

const BtnLayout = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 2rem;
`;
