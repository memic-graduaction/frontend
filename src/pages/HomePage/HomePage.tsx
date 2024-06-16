// HomePage.tsx
import React, { useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { youtubeLinkState, youtubeIDstate } from 'src/recoil/states';
import { extractVideoIdFromLink } from 'src/utils/extractVideoId';
import Header from '../../components/Header/Header';
import * as S from './Styles';
import SearchButton from './SearchButton';
import mouseIcon from '../../assets/mouseIcon.png';

function HomePage() {
  const setLink = useSetRecoilState(youtubeLinkState);
  const setVideoIds = useSetRecoilState(youtubeIDstate);
  const videoIds = useRecoilValue(youtubeIDstate);
  const [inputValue, setInputValue] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [isYoutubeUrl, setIsYoutubeUrl] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);

    // URL 및 YouTube 동영상 URL 형식 검사
    const youtubeUrlRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const isYoutube = youtubeUrlRegex.test(value);
    setIsYoutubeUrl(isYoutube);

    // URL이 유효한지 검사
    setIsValidUrl(value.length > 0 && isYoutube);
  };

  const handleButtonClick = () => {
    if (isValidUrl && isYoutubeUrl) {
      const urlWithId = inputValue; // URL을 그대로 사용

      // Recoil에 링크 저장
      setLink(urlWithId);

      // URL을 복제한 후 비디오 ID 추출
      const videoId = extractVideoIdFromLink(urlWithId);
      if (videoId) {
        const newVideoId = { id: videoIds.length + 1, url: videoId };
        setVideoIds((prevVideoIds) => [...prevVideoIds, newVideoId]);
      } else {
        alert('유효한 YouTube 동영상 URL이 아닙니다.');
      }
    } else {
      alert('유효한 YouTube 동영상 URL이 아닙니다.');
    }
  };

  return (
    <S.Layout>
      <Header />
      <S.Title>
        좋아하는 동영상<S.T>으로</S.T>
        <br />
        영어 공부<S.T>와</S.T> 회화 능력 향상<S.T>까지</S.T>
      </S.Title>
      <S.SearchBar>
        <S.Guide>SEARCH</S.Guide>|
        <S.Input placeholder="YOUTUBE 주소를 붙여넣기 해주세요" onChange={handleChange} value={inputValue} />
        <SearchButton onClick={handleButtonClick} isValidUrl={isValidUrl} isYoutubeUrl={isYoutubeUrl} />
      </S.SearchBar>
      <S.ScrollIcon src={mouseIcon} alt="Icon" />
    </S.Layout>
  );
}

export default HomePage;
