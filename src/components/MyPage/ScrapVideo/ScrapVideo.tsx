
import React, { useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { UUid } from 'src/recoil/states';
import { BookMarkAfter } from 'src/assets/Icons';
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
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [page]);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const addBookmark = async (transcriptionId) => {
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
      const newScrap = { id: response.data.id, url: '', transcriptionId };
      setVideos((prevVideos) => [...prevVideos, newScrap]);
    } catch (error) {
      console.error('Error adding bookmark:', error);
    }
  };

  const deleteBookmark = async (scrapId) => {
    const confirmed = window.confirm('스크랩을 취소하시겠습니까?');
    if (confirmed) {
      try {
        await axios.delete(`/v1/scraps/${scrapId}`, {
          headers: {
            Authorization: `${user.accessToken}`,
          },
        });
        setVideos((prevVideos) => prevVideos.filter((video) => video.id !== scrapId));
      } catch (error) {
        console.error('Error deleting bookmark:', error);
      }
    }
  };

  const toggleBookmark = (videoId, transcriptionId, isBookmarked) => {
    if (isBookmarked) {
      deleteBookmark(videoId);
    } else {
      addBookmark(transcriptionId);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);

  return (
    <Wrapper>
      <Container ref={containerRef} onScroll={handleScroll}>
        {videos.map((vid) => (
          <React.Fragment key={vid.id}>
            <VideoItem onClick={() => handleVideoClick(vid)}>
              <ButtonContainer onClick={(e) => { e.stopPropagation(); toggleBookmark(vid.id, vid.transcriptionId, vid.isBookmarked); }}>
                <BookMarkAfter />
              </ButtonContainer>
              <Thumbnail src={vid.thumbnail} alt={vid.title} />
              <Title>{vid.title}</Title>
            </VideoItem>
            <Separator />
          </React.Fragment>
        ))}
        {loading && <Loading>Loading...</Loading>}
      </Container>
      {selectedVideo && (
        <SideModalWrapper onClick={(e) => e.stopPropagation()}>
          <SideModal video={selectedVideo} onClose={closeModal} isVisible={isModalVisible} />
        </SideModalWrapper>
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

const SideModalWrapper = styled.div`
  width: 35%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
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

export const ButtonContainer = styled.div`
  width: 3%;
  position: relative;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 30px 0 30px;
`;
