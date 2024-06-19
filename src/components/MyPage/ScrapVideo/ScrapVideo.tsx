import React, { useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { UUid } from 'src/recoil/states';
import styled from 'styled-components';
import SideModal from "./SideModal";

function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const containerRef = useRef(null);
  const user = useRecoilValue(UUid);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/v1/scraps', {
          headers: {
            Authorization: `${user.accessToken}`,
          },
        });

        const videosWithDetails = await Promise.all(response.data.map(async (video) => {
          const videoDetails = await fetchVideoDetails(video.url);
          return { ...video, ...videoDetails };
        }));

        setVideos(videosWithDetails);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [page]);

  const fetchVideoDetails = async (url) => {
    try {
      const response = await fetch(`https://noembed.com/embed?url=${url}`);
      const data = await response.json();
      return {
        title: data.title,
        thumbnail: data.thumbnail_url,
        uploader: data.author_name,
      };
    } catch (error) {
      console.error('Error fetching video details:', error);
    }
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => {
      setSelectedVideo(null);
    }, 300); // 애니메이션 시간과 동일하게 설정
  };


  return (
    <Wrapper>
      <Container ref={containerRef} onScroll={handleScroll}>
        {videos.map((vid) => (
          <React.Fragment key={vid.id}>
            <VideoItem onClick={() => handleVideoClick(vid)}>
              <Thumbnail src={vid.thumbnail} alt={vid.title} />
              <Title>{vid.title}</Title>
            </VideoItem>
            <Separator />
          </React.Fragment>
        ))}
        {loading && <Loading>Loading...</Loading>}
      </Container>
      {isModalVisible && selectedVideo && (
        <SideModal
          video={selectedVideo}
          isVisible={isModalVisible}
          onClose={closeModal}
        />
      )}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  color: #000000;
  border-radius: 20px;
  padding: 30px;
  overflow-y: auto; 
  position: relative;
`;

const VideoItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 120px;
  height: 90px;
  border-radius: 10px;
  margin-right: 40px;
`;

const Title = styled.div`
  font-size: 1.4rem;
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
