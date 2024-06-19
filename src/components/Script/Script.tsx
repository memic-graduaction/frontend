import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState, useSetRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import * as state from 'src/recoil/states';
import { fetchVideoDuration } from 'src/utils/youtubeAPI';
import { extractVideoIdFromLink } from 'src/utils/extractVideoId';
import { getSelectedPhrase } from 'src/utils/getSelectedPhrase';
import { Pin } from 'src/assets/Icons';
import { youtubeIDSelector } from 'src/recoil/selectors';
import { useSetScrapFunc } from 'src/utils/useSetScrapFunc';
import * as S from './Styles';
import Loading from './Loading';
import RecButton from './RecButton';
import HighLightText from './HighLightText';

interface Props {
  id: number;
  startPoint: string;
  sentence: string;
}

function Script() {
  const [xy, setXY] = useState({ x: -1000, y: -1000 });
  const [isSelected, setIsSelected] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(state.sideBarOpenState);
  const setPhrase = useSetRecoilState(state.selectedPhrase);
  const [loading, setLoading] = useState(false);
  const url = useRecoilValue(state.youtubeLinkState);
  const urlId = useRecoilValue(youtubeIDSelector);
  const [youtubeId, setYoutubeId] = useRecoilState(state.youtubeIDstate);
  const [videoDuration, setVideoDuration] = useRecoilState(state.videoDurationState);
  const [datas, setDatas] = useState<Props[] | null>(null);
  const resetSideBar = useResetRecoilState(state.showOverall);
  const user = useRecoilValue(state.UUid);
  useSetScrapFunc();

  const handleGetScript = async () => {
    setLoading(true);
    const formData = {
      url: `${url}`,
    };
    console.log('handleGetScript - URL:', url);
    try {
      let response;
      if (urlId !== null) {
        response = await axios.get(`/v1/transcriptions/${urlId}`);
        console.log(response.data);
      } else {
        response = await axios.post('/v1/transcriptions', formData, {
          headers: {
            Authorization: `${user.accessToken}`,
          },
        });
        const newYoutubeId = [...youtubeId];
        newYoutubeId.push({ url: response.data.url, id: response.data.id });
        setYoutubeId(newYoutubeId);
      }
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
    if (phrase === null || isSideBarOpen) setXY({ x: -1000, y: -1000 });
    if (e && phrase !== null && !isSideBarOpen) {
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
    const index = datas.findIndex((data) => data.startPoint === currentStartTime);
    if (index !== -1 && index + 1 < datas.length) {
      return datas[index + 1].startPoint;
    }
    return videoDuration; // 마지막 자막이거나 데이터를 찾을 수 없는 경우
  };

  useEffect(() => {
    handleGetScript();
    console.log('useEffect - URL:', url);
    const videoId = extractVideoIdFromLink(url);
    if (videoId) {
      fetchVideoDuration(videoId)
        .then((duration) => {
          if (duration) {
            setVideoDuration(duration);
          } else {
            console.error('Failed to fetch video duration');
            setVideoDuration('99:59:59');
          }
        })
        .catch((error) => {
          console.error('Error fetching video duration:', error);
          setVideoDuration('99:59:59');
        });
    }
    setXY({ x: -1000, y: -1000 });
    resetSideBar();
    setIsSideBarOpen(false);
  }, [url]);

  return (
    <S.Layout>
      <S.ButtonContainer>
        <S.ScriptSmall>Script</S.ScriptSmall>
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
            <HighLightText
              dataId={data.id}
              data={data.sentence}
              textColor={isBetween(data.startPoint, current, getNextStartTime(data.startPoint)) ? '#222222' : '#CFCFCF'}
              onClick={(e) => handleSentenceClick(data.id, data.sentence, data.startPoint, e)}
            />

            <RecButton id={data.id} sentence={data.sentence} />
          </S.TextLayout>
        ))}
      <S.ScrapButton $isselected={isSelected} $xy={xy} onClick={handleScrapClick}>
        <Pin />
        표현 저장
      </S.ScrapButton>
    </S.Layout>
  );
}

export default Script;
