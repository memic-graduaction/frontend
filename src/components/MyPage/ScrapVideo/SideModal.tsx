import React, { useEffect, useState, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UUid } from 'src/recoil/states';
import styled, { keyframes } from 'styled-components';

interface SideModalProps {
  video: {
    id: number;
    thumbnail: string;
    title: string;
    uploader: string;
    url: string;
  } | null;
  onClose: () => void;
  isVisible: boolean;
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

function SideModal({ video, onClose, isVisible }: SideModalProps) {
  const [isRendered, setIsRendered] = useState(isVisible);
  const modalRef = useRef(null);
  const user = useRecoilValue(UUid);
  const navigate = useNavigate();

  useEffect(() => {
    if (isVisible) {
      setIsRendered(true);
    }
  }, [isVisible]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, onClose]);

  const deleteBookmark = async (scrapId) => {
    const confirmed = window.confirm('스크랩을 취소하시겠습니까?');
    if (confirmed) {
      try {
        await axios.delete(`/v1/scraps/${scrapId}`, {
          headers: {
            Authorization: `${user.accessToken}`,
          },
        });
        window.location.reload();
      } catch (error) {
        console.error('Error deleting bookmark:', error);
      }
    }
  };

  const toggleBookmark = (videoId) => {
    deleteBookmark(videoId);
  };

  const handleVideoScript = () => {
    navigate(`/script/${video.url}`);
  };

  const animationEndHandler = () => {
    if (!isVisible) {
      setIsRendered(false);
    }
  };

  if (!isRendered) return null;

  return (
    <ModalWrapper
      isVisible={isVisible}
      onClick={(e) => e.stopPropagation()}
      onAnimationEnd={animationEndHandler}
    >
      <CloseButton onClick={(e) => { e.stopPropagation(); onClose(); }}>×</CloseButton>
      <Thumbnail src={video.thumbnail} alt={video.title} />
      <VideoInfo>
        <Title>{video.title}</Title>
        <Uploader>Uploaded by: {video.uploader}</Uploader>
      </VideoInfo>
      <ScrapButton onClick={() => toggleBookmark(video.id)}>스크랩 해제</ScrapButton>
      <Separator />
      <Button onClick={handleVideoScript}>동영상 스크립트 보기</Button>
      <Button onClick={() => window.open(video.url, '_blank')}>유튜브에서 보기</Button>
    </ModalWrapper>
  );
}

export default SideModal;

const ModalWrapper = styled.div<{ isVisible: boolean }>`
  width: 35%;
  height: 100%;
  background: #fff;
  box-shadow: -10px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 20px 60px;
  position: absolute;
  overflow: auto;
  right: 0;
  top: 0;
  animation: ${({ isVisible }) => (isVisible ? slideIn : slideOut)} 0.3s forwards;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const VideoInfo = styled.div`
  line-height: 2;
`;

const Title = styled.h2`
  font-size: 1.5rem;
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 20px;
  margin: 35px 0 10px 0;
`;

const Uploader = styled.div`
  font-size: 1.1rem;
  color: #555;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  background: #008080;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.3rem;

  &:hover {
    background:#005757;
  }
`;

const ScrapButton = styled.button`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  background: none;
  color: #008080;
  border: 1px solid #008080;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.3rem;

  &:hover {
    background:#005757;
    color: white;
  }
`;

const Separator = styled.div`
  height: 1px;
  background: #ddd;
  margin: 20px 0;
`;