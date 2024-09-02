import React, { useEffect, useState } from 'react';
import { getRandomVideos } from 'src/utils/getRandomVideos';
import Header from '../../components/Header/Header';
import * as S from './Styles';

function RankPage() {
  const [videos, setVideos] = useState([]);
  const [scroll, setScroll] = useState(true);
  const videoUrls = getRandomVideos();

  async function fetchVideoTitle(youtubeLink) {
    try {
      const response = await fetch(`https://noembed.com/embed?url=${youtubeLink}`);
      const data = await response.json();
      return { title: data.title, thumbnail: data.thumbnail_url };
    } catch (e) {
      console.error('Error fetching video:', e);
      return { title: 'Error fetching video title', thumbnail: '' };
    }
  }

  async function getThumbnail() {
    try {
      const videoDetails = await Promise.all(
        videoUrls.map(async (url) => {
          const videoData = await fetchVideoTitle(url);
          return { ...videoData, url };
        }),
      );
      setVideos(videoDetails);
    } catch (e) {
      console.error('Error fetching videos:', e);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    getThumbnail(); // 초기 데이터 가져오기

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="rankPage">
      <S.Layout>
        <Header />
        <S.Container>
          {scroll && (
            <>
              <S.Title>오늘은 이런 영상 어때요?</S.Title>
              <S.ThumbnailLayout>
                {videos.map((video) => (
                  <S.ThumbnailBox
                    key={video.url} // key prop 추가
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <S.Thumbnail src={video.thumbnail} />
                  </S.ThumbnailBox>
                ))}
              </S.ThumbnailLayout>
            </>
          )}
        </S.Container>
      </S.Layout>
    </div>
  );
}

export default RankPage;
