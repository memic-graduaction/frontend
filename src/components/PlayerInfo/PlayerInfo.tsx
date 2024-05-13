import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { BookMarkBefore, BookMarkAfter } from 'src/assets/Icons';
import { youtubeLinkState } from 'src/recoil/states';
import { extractVideoIdFromLink } from 'src/utils/extractVideoId';
import * as S from './Styles';

function PlayerInfo() {
  const youtubeLink = useRecoilValue(youtubeLinkState);
  const [videoTitle, setVideoTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorProfileImage, setAuthorProfileImage] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    async function fetchVideoTitle() {
      try {
        const response = await fetch(`https://noembed.com/embed?url=${youtubeLink}`);
        const data = await response.json();
        setVideoTitle(data.title);
        setAuthorName(data.author_name);

        const videoId = extractVideoIdFromLink(youtubeLink);
        const channelId = await fetchChannelId(videoId);
        const channelInfo = await fetchChannelInfo(channelId);

        if (channelInfo.items && channelInfo.items.length > 0) {
          const profileImageUrl = channelInfo.items[0].snippet.thumbnails.default.url;
          setAuthorProfileImage(profileImageUrl);
        }
      } catch (e) {
        console.error('Error fetching video:', e);
        setVideoTitle('Error fetching video title');
      }
    }

    if (youtubeLink) {
      fetchVideoTitle();
    }
  }, [youtubeLink]);

  // 채널 id 가져오는 함수
  async function fetchChannelId(videoId) {
    try {
      // 동영상 정보
      const videoResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyCPMsD8CvSgwwinnSUiEPvEPo2DwEldcjo`,
      );
      const videoData = await videoResponse.json();
      // 채널 id 추출
      if (videoData.items && videoData.items.length > 0) {
        const { channelId } = videoData.items[0].snippet;
        return channelId;
      }
    } catch (e) {
      console.error(e);
    }
  }

  // 채널 정보 가져오는 함수
  async function fetchChannelInfo(channelId) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyCPMsD8CvSgwwinnSUiEPvEPo2DwEldcjo`,
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.error('Error fetching channel info:', e);
    }
  }

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <S.Layout>
      <S.TitleLayout>
        <S.TitleContent>{videoTitle}</S.TitleContent>
      </S.TitleLayout>
      <S.Border />
      <S.BottomContainer>
        <S.AuthorContainer>
          <S.AuthorImage src={authorProfileImage} />
          <S.AuthorContent>{authorName}</S.AuthorContent>
        </S.AuthorContainer>
        <S.ButtonContainer>
          {isBookmarked ? <BookMarkAfter onClick={toggleBookmark} /> : <BookMarkBefore onClick={toggleBookmark} />}
        </S.ButtonContainer>
      </S.BottomContainer>
    </S.Layout>
  );
}

export default PlayerInfo;
