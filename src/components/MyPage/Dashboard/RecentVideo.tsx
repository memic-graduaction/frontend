import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { UUid } from 'src/recoil/states';
import styled from 'styled-components';

function App() {
  const [videos, setVideos] = useState([]);
  const user = useRecoilValue(UUid);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/v1/transcriptions/my/all', {
          headers: {
            Authorization: `${user.accessToken}`,
          },
        });
        const videoUrls = response.data.slice(0, 10).map((video) => video.url);
        const videoDetails = await Promise.all(videoUrls.map(async (url) => {
          const videoData = await fetchVideoTitle(url);
          return { ...videoData, url };
        }));

        setVideos(videoDetails);
      } catch (e) {
        console.error('Error fetching videos:', e);
      }
    };
    fetchVideos();
  }, [user.accessToken]);

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

  return (
    <Wrapper>
      <Header>
        <Title>최근 조회한 동영상</Title>
        <HeaderSeparator />
      </Header>
      <Container>
        {videos.map((video) => (
          <React.Fragment key={video.id}>
            <VideoItem href={video.url} target="_blank" rel="noopener noreferrer">
              <Thumbnail src={video.thumbnail} alt={video.title} />
              <VideoTitle>{video.title}</VideoTitle>
            </VideoItem>
            <Separator />
          </React.Fragment>
        ))}
      </Container>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 1;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%; 
  overflow-y: auto;
  background: #fff;
  padding: 0 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const VideoItem = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 70px;
  border-radius: 10px;
  margin-right: 40px;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 10px 0 20px 5px;
`;

const VideoTitle = styled.div`
  font-size: 1.3rem;
  margin: 10px 0;
  color: #2C3E50;
`;

const Separator = styled.div`
  border-top: 1px solid #A3A3A3;
  margin: 15px 0;
`;

const HeaderSeparator = styled.div`
  border-top: 1px solid #A3A3A3;
  margin: 0;
`;
