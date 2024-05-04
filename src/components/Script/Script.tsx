import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import * as state from 'src/recoil/states';
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
  const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(state.sideBarOpenState);
  const setPhrase = useSetRecoilState(state.selectedPhrase);

  const [loading, setLoading] = useState(false);
  const url = useRecoilState(state.youtubeLinkState);
  const [datas, setDatas] = useState<Props[] | null>(null);
  const serverUrl = `${BaseUrl}/v1/transcriptions`;
  const handleGetScript = async () => {
    setLoading(true);
    const formData = {
      url: `${url}`,
    };
    try {
      const response = await axios.post(serverUrl, formData);
      setDatas(response.data.sentences);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const setScriptIDState = useSetRecoilState(state.scriptIDstate);
  const setScriptSentencestate = useSetRecoilState(state.scriptSentencestate);
  const setSelectedStartPointAndSentence = useSetRecoilState(state.youtubePlayerState);
  const current = useRecoilValue(state.currentTimeState);

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
    const { phrase } = getSelectedPhrase();
    if (phrase !== null && !isSideBarOpen) {
      setXY({ x: e.pageX, y: e.pageY });
      setIsSelected(true);
      setPhrase(phrase);
    }
  };

  // 표현 저장 버튼 눌렀을 때
  const handleScrapClick = () => {
    setIsSideBarOpen(true);
    setIsSelected(false);
  };

  const isBetween = (startTime: string, currentTime: string, nextStartTime: string): boolean =>
    startTime <= currentTime && currentTime < nextStartTime;

  const getNextStartTime = (currentStartTime: string): string => {
    if (!datas) return ''; // 데이터가 없으면 빈 문자열 반환

    for (let i = 0; i < datas.length; i += 1) {
      if (datas[i].startPoint > currentStartTime) {
        return datas[i].startPoint;
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
        datas &&
        datas.map((data) => (
          <S.TextLayout key={data.id}>
            <S.TimeBox
              style={
                isBetween(data.startPoint, current, getNextStartTime(data.startPoint))
                  ? { color: 'rgba(255, 92, 92, 1)' }
                  : { color: 'rgba(255, 92, 92, 0.5)' }
              }
              onClick={() => handleSentenceClick(data.id, data.sentence, data.startPoint)}
            >
              {data.startPoint}
            </S.TimeBox>
            <S.TextBox
              style={
                isBetween(data.startPoint, current, getNextStartTime(data.startPoint))
                  ? { color: '#222222' }
                  : { color: '#CFCFCF' }
              }
              onClick={(e) => handleSentenceClick(data.id, data.sentence, data.startPoint, e)}
            >
              {data.sentence.split(' ').map((d) => (
                <S.StyledText>{d}</S.StyledText>
              ))}
            </S.TextBox>
            <RecButton id={data.id} sentence={data.sentence} />
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
