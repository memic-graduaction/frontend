import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { BookMark } from 'src/assets/Icons';
import { youtubeLinkState } from 'src/recoil/states';
import * as S from './Styles';

function PlayerInfo() {
  const youtubeLink = useRecoilValue(youtubeLinkState);
  const [videoTitle, setVideoTitle] = useState('');

  useEffect(() => {
    async function fetchVideoTitle() {
      try {
        // YouTube 동영상 제목을 가져오는 코드
        const response = await fetch(`https://noembed.com/embed?url=${youtubeLink}`);
        const data = await response.json();
        setVideoTitle(data.title);
      } catch (error) {
        console.error('Error fetching video title:', error);
        setVideoTitle('Error fetching video title');
      }
    }

    if (youtubeLink) {
      fetchVideoTitle();
    }
  }, [youtubeLink]);

  return (
    <S.Layout>
      <S.TitleLayout>
        <S.TitleContent>{videoTitle}</S.TitleContent>
        <S.ButtonContainer>
          <BookMark />
        </S.ButtonContainer>
      </S.TitleLayout>
      <S.Border />
      <S.StyledTag>Tags</S.StyledTag>
      <S.HashTagBox>
        <S.HashTag>#programmers</S.HashTag>
        <S.HashTag>#tech</S.HashTag>
        <S.HashTag>#programming</S.HashTag>
        <S.PlusBtn>+</S.PlusBtn>
      </S.HashTagBox>
    </S.Layout>
  );
}

export default PlayerInfo;
