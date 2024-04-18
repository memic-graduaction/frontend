import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import {
  youtubeLinkState,
  scriptIDstate,
  scriptSentencestate,
  youtubePlayerState,
  currentTimeState,
  sideBarOpenState,
} from 'src/recoil/states';
import { getSelectedPhrase } from 'src/utils/getSelectedPhrase';
import { Pin } from 'src/assets/Icons';
import * as S from './Styles';
import Loading from './Loading';
import RecButton from './RecButton';

interface Props {
  id: number;
  startPoint: string;
  sentence: string;
}

const BaseUrl = process.env.REACT_APP_BASE_URL;

function Script() {
  const [xy, setXY] = useState({ x: -1000, y: -1000 });
  const [isSelected, setIsSelected] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(sideBarOpenState);

  const [loading, setLoading] = useState(false);
  const url = useRecoilState(youtubeLinkState);
  const [data, setData] = useState<Props[] | null>(null);
  const serverUrl = `${BaseUrl}/v1/transcriptions`;
  const handleGetScript = useCallback(async () => {
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
  }, [url]);

  const setScriptIDState = useSetRecoilState(scriptIDstate);
  const setScriptSentencestate = useSetRecoilState(scriptSentencestate);
  const setSelectedStartPointAndSentence = useSetRecoilState(youtubePlayerState);
  const current = useRecoilValue(currentTimeState);

  // 해당 행으로 재생포인트 이동
  const handleSentenceClick = (
    id: number,
    sentence: string,
    startPoint: string,
    e?: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    setIsSelected(false);
    setScriptIDState(id);
    setScriptSentencestate(sentence);
    setSelectedStartPointAndSentence({ startPoint, sentence });
    const { startIndex, endIndex } = getSelectedPhrase();
    if (endIndex !== startIndex && !isSideBarOpen) {
      setXY({ x: e.clientX - 100, y: e.clientY - 35 });
      setIsSelected(true);
    }
  };

  const handleScrapClick = () => {
    setIsSideBarOpen(true);
    setIsSelected(false);
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
    setXY({ x: -1000, y: -1000 });
  }, []);

  return (
    <S.Layout>
      <S.ButtonContainer>
        <S.ScriptSmall>Script</S.ScriptSmall>
        <S.DownLoadBtn>Download</S.DownLoadBtn>
      </S.ButtonContainer>
      <S.Border />
      {loading ? <Loading /> : null}
      {!loading &&
        data &&
        data.map((v) => (
          <S.TextLayout key={v.id}>
            <S.NormalTime
              style={
                isBetween(v.startPoint, current, getNextStartTime(v.startPoint))
                  ? { color: 'rgba(255, 92, 92, 1)' }
                  : { color: 'rgba(255, 92, 92, 0.5)' }
              }
              onClick={() => handleSentenceClick(v.id, v.sentence, v.startPoint)}
            >
              {v.startPoint}
            </S.NormalTime>
            <S.NormalText
              style={
                isBetween(v.startPoint, current, getNextStartTime(v.startPoint))
                  ? { color: '#222222' }
                  : { color: '#CFCFCF' }
              }
              onClick={(e) => handleSentenceClick(v.id, v.sentence, v.startPoint, e)}
            >
              {v.sentence}
            </S.NormalText>
            <RecButton id={v.id} sentence={v.sentence} />
          </S.TextLayout>
        ))}
      <S.ScrapButton isSelected={isSelected} xy={xy} onClick={handleScrapClick}>
        <Pin />
        표현 저장
      </S.ScrapButton>
    </S.Layout>
  );
}

export default Script;
