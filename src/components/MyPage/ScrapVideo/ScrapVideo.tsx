import React, { useState, useEffect } from 'react';
import { BookMarkAfter } from 'src/assets/Icons';
import styled from 'styled-components';
// import axios from 'axios';

function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      const newVideos = [
        // 더미 데이터
        { id: 1, thumbnail: 'https://via.placeholder.com/120x90', title: 'Video 1' },
        { id: 2, thumbnail: 'https://via.placeholder.com/120x90', title: 'Video 2' },
        { id: 3, thumbnail: 'https://via.placeholder.com/120x90', title: 'Video 1' },
        { id: 4, thumbnail: 'https://via.placeholder.com/120x90', title: 'Video 2' },
        { id: 5, thumbnail: 'https://via.placeholder.com/120x90', title: 'Video 1' },
        { id: 6, thumbnail: 'https://via.placeholder.com/120x90', title: 'Video 2' },
        { id: 7, thumbnail: 'https://via.placeholder.com/120x90', title: 'Video 1' },
        { id: 8, thumbnail: 'https://via.placeholder.com/120x90', title: 'Video 2' },
      ];
      setVideos((prevVideos) => [...prevVideos, ...newVideos]);
      setLoading(false);
    };

    fetchVideos();
  }, [page]);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const toggleBookmark = (id) => {
    const confirmed = window.confirm('스크랩을 취소하시겠습니까?');
    if (confirmed) {
      // try {
      //   await axios.delete(`/v1/스크랩목록`);
      //   setVideos((prevVideos) => prevVideos.filter((video => video.id != id)));
      // window.location.reload();
      // }
      setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === id ? { ...video, isBookmarked: false } : video
        )
      );
    }
  };

  return (
    <Wrapper>
      <Container onScroll={handleScroll}>
        {videos.map((video) => (
          <React.Fragment key={video.id}>
            <VideoItem>
              <ButtonContainer onClick={() => toggleBookmark(video.id)}>
                <BookMarkAfter />
              </ButtonContainer>
              <Thumbnail src={video.thumbnail} alt={video.title} />
              <Title>{video.title}</Title>
            </VideoItem>
            <Separator />
          </React.Fragment>
        ))}
        {loading && <Loading>Loading...</Loading>}
      </Container>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  color: #000000;
  border-radius: 20px;
  padding: 30px;
  overflow-y: auto; 
`;

const VideoItem = styled.div`
  display: flex;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 120px;
  height: 90px;
  border-radius: 10px;
  margin-right: 40px;
`;

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;

const Separator = styled.div`
  border-top: 1px solid #A3A3A3;
  margin: 15px 0;
`;

const Loading = styled.div`
  text-align: center;
  margin: 20px 0;
  font-size: 1rem;
  color: #888888;
`;

export const ButtonContainer = styled.div`
  width: 3%;
  position: relative;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 30px 0 30px;
`;