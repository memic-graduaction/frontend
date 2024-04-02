import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import {
  youtubeLinkState,
  scriptIDstate,
  scriptSentencestate,
  youtubePlayerState,
  currentTimeState,
} from 'src/recoil/states';
import * as S from './Styles';
import Loading from './Loading';
import { ModalStack } from '../Modal/Modal';
import RecButton from './RecButton';

interface Props {
  id: number;
  startPoint: string;
  sentence: string;
}

const BaseUrl = process.env.REACT_APP_BASE_URL;

function Script() {
  const [loading, setLoading] = useState(false);
  const url = useRecoilState(youtubeLinkState);
  const [data, setData] = useState<Props[] | null>(null);
  const serverUrl = `${BaseUrl}/v1/transcriptions`;

  const handleGetScript = async () => {
    setLoading(true);
    const formData = {
      url: `${url}`,
    };
    try {
      const response = await axios.post(serverUrl, formData);
      setData(response.data.sentences);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const setScriptIDState = useSetRecoilState(scriptIDstate);
  const setScriptSentencestate = useSetRecoilState(scriptSentencestate);
  const setSelectedStartPointAndSentence = useSetRecoilState(youtubePlayerState);
  const current = useRecoilValue(currentTimeState);

  // 해당 행으로 재생포인트 이동
  const handleLeftLayoutClick = (id: number, sentence: string, startPoint: string) => {
    setScriptIDState(id);
    setScriptSentencestate(sentence);
    setSelectedStartPointAndSentence({ startPoint, sentence });
  };

  const isBetween = (startTime: string, currentTime: string, nextStartTime: string): boolean =>
    startTime <= currentTime && currentTime < nextStartTime;

  const getNextStartTime = (currentStartTime: string): string => {
    if (!data) return ''; // 데이터가 없으면 빈 문자열 반환

    for (let i = 0; i < data.length; i += 1) {
      if (data[i].startPoint > currentStartTime) {
        return data[i].startPoint;
      }
    }
    return '';
  };

  useEffect(() => {
    handleGetScript();
  }, []);

  return (
    <S.Layout>
      <ModalStack />
      <S.ButtonContainer>
        <S.ScriptSmall>Script</S.ScriptSmall>
        <S.DownLoadBtn>Download</S.DownLoadBtn>
      </S.ButtonContainer>
      <S.Border />
      {loading ? <Loading /> : null}
      {data &&
        data.map((v) => (
          <S.TextLayout key={v.id}>
            <S.NormalTime
              style={
                isBetween(v.startPoint, current, getNextStartTime(v.startPoint))
                  ? { color: 'rgba(255, 92, 92, 1)' }
                  : { color: 'rgba(255, 92, 92, 0.5)' }
              }
              onClick={() => handleLeftLayoutClick(v.id, v.sentence, v.startPoint)}
            >
              {v.startPoint}
            </S.NormalTime>
            <S.NormalText
              style={
                isBetween(v.startPoint, current, getNextStartTime(v.startPoint))
                  ? { color: '#222222' }
                  : { color: '#CFCFCF' }
              }
              onClick={() => handleLeftLayoutClick(v.id, v.sentence, v.startPoint)}
            >
              {v.sentence}
            </S.NormalText>
            <RecButton id={v.id} sentence={v.sentence} />
          </S.TextLayout>
        ))}
    </S.Layout>
  );
}

export default Script;
