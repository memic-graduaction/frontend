import React, { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { BookMarkBefore, BookMarkAfter } from 'src/assets/Icons';
import { youtubeLinkState, UUid, scrapState } from 'src/recoil/states';
import { youtubeIDSelector } from 'src/recoil/selectors';
import { extractVideoIdFromLink } from 'src/utils/extractVideoId';
import axios from 'axios';
import * as S from './Styles';

function PlayerInfo() {
  const youtubeLink = useRecoilValue(youtubeLinkState);
  const transcriptionId = useRecoilValue(youtubeIDSelector);
  const [videoTitle, setVideoTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorProfileImage, setAuthorProfileImage] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [scrapId, setScrapId] = useState<number | null>(null);
  const user = useRecoilValue(UUid);
  const setScrapState = useSetRecoilState(scrapState);

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


  useEffect(() => {
    async function checkIfBookmarked() {
      try {
        const response = await axios.get('/v1/scraps', {
          headers: {
            Authorization: `${user.accessToken}`,
          },
        });
        const scrapItem = response.data.find((scrap) => scrap.transcriptionId === transcriptionId);
        if (scrapItem) {
          setIsBookmarked(true);
          setScrapId(scrapItem.id);
          setScrapState((prev) => [...prev, transcriptionId]);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (transcriptionId) {
      checkIfBookmarked();
    }
  }, [transcriptionId, user, setScrapState]);

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

  const toggleBookmark = async () => {
    if (!isBookmarked) {
      const confirmBookmark = window.confirm('스크랩 하시겠습니까?');
      if (confirmBookmark && transcriptionId) {
        try {
          const response = await axios.post(
            '/v1/scraps',
            { transcriptionId },
            {
              headers: {
                Authorization: `${user.accessToken}`,
              },
            }
          );
          setIsBookmarked(true);
          setScrapId(response.data.id);
          setScrapState((prev) => [...prev, transcriptionId]);
          console.log(`Bookmark added: id=${response.data.id}, transcriptionId=${transcriptionId}`);
          console.log('북마크 추가됨:', response.data);
          window.location.reload();
        } catch (error) {
          console.error('북마크 등록 중 에러 :', error);
        }
      }
    } else {
      const confirmRemoveBookmark = window.confirm('스크랩을 삭제하시겠습니까?');
      if (confirmRemoveBookmark && scrapId !== null) {
        try {
          await axios.delete(`/v1/scraps/${scrapId}`, {
            headers: {
              Authorization: `${user.accessToken}`,
            },
          });
          setIsBookmarked(false);
          setScrapState((prev) => prev.filter((id) => id !== transcriptionId));
          console.log('북마크 삭제됨!');
          console.log(`Bookmark removed: id=${scrapId}, transcriptionId=${transcriptionId}`);
        } catch (error) {
          console.error('북마크 삭제 중 에러:', error);
        }
      }
    }
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
