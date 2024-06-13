import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const newVideos = [
        // Dummy data
        { id: 1, thumbnail: 'https://via.placeholder.com/120x90', title: 'Video 1' },
        { id: 2, thumbnail: 'https://via.placeholder.com/120x90', title: 'Video 2' },
        { id: 3, thumbnail: 'https://via.placeholder.com/120x90', title: 'Video 3' },
        { id: 4, thumbnail: 'https://via.placeholder.com/120x90', title: 'Video 4' },
        { id: 5, thumbnail: 'https://via.placeholder.com/120x90', title: 'Video 5' },
        { id: 6, thumbnail: 'https://via.placeholder.com/120x90', title: 'Video 6' },
      ];
      setVideos(newVideos);
    };
    fetchVideos();
  }, []);

  return (
    <Wrapper>
      <Header>
        <Title>최근 조회한 동영상</Title>
        <HeaderSeparator />
      </Header>
      <Container>
        {videos.map((video) => (
          <React.Fragment key={video.id}>
            <VideoItem>
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
  height: auto;
  position: relative;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 1;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%; 
  background: #fff;
  padding: 0 20px;
`;

const VideoItem = styled.div`
  display: flex;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 70px;
  border-radius: 10px;
  margin-right: 40px;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0 10px 5px;
`;

const VideoTitle = styled.div`
  font-size: 1.3rem;
  margin: 10px 0;
`;

const Separator = styled.div`
  border-top: 1px solid #A3A3A3;
  margin: 15px 0;
`;

const HeaderSeparator = styled.div`
  border-top: 1px solid #A3A3A3;
  margin: 0;
`;
