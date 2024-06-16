import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface SideModalProps {
  video: {
    id: number;
    thumbnail: string;
    title: string;
    uploader: string;
    description: string;
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

  useEffect(() => {
    if (isVisible) {
      setIsRendered(true);
    }
  }, [isVisible]);

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
      <CloseButton onClick={onClose}>×</CloseButton>
      <Thumbnail src={video.thumbnail} alt={video.title} />
      <VideoInfo>
        <Title>{video.title}</Title>
        <Uploader>Uploaded by: {video.uploader}</Uploader>
        <Description>{video.description}</Description>
      </VideoInfo>
      <Button onClick={() => {/* 스크랩 해제 로직 */ }}>스크랩 해제</Button>
      <Separator />
      <Button onClick={() => {/* 스크립트 페이지로 이동 로직 */ }}>동영상 스크립트 보기</Button>
      <Button onClick={() => window.open(video.url, '_blank')}>유튜브에서 보기</Button>
      {/* 추가 기능 버튼들 */}
    </ModalWrapper>
  );
}

export default SideModal;

const ModalWrapper = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: -10px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 20px 50px;
  position: absolute;
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
  font-size: 1.7rem;
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 20px;
  margin: 35px 0;
`;

const Uploader = styled.div`
  font-size: 1.3rem;
  color: #555;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #777;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  background: #3fd1a0;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.3rem;

  &:hover {
    background: #0056b3;
  }
`;

const Separator = styled.div`
  height: 1px;
  background: #ddd;
  margin: 20px 0;
`;