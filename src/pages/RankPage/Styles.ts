import styled, { keyframes } from 'styled-components';
import Colors from 'src/styles/Colors';

const ThumbnailAnimation = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Layout = styled.div`
  background: ${Colors.BgMain2};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 75rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  gap: 5rem;
  margin-top: 3rem;
  border-radius: 0.5rem;
  box-shadow:
    1px 1px 5px rgba(0, 0, 0, 0.3),
    inset -1px -1px 5px rgba(0, 0, 0, 0.1),
    inset 1px 1px 5px rgba(255, 255, 255, 0.2);
`;

export const Title = styled.div`
  color: #85786d;
  font-size: 4rem;
  line-height: 1.5;
  text-align: center;
  animation: ${ThumbnailAnimation} 0.5s ease-out forwards;
`;

export const ThumbnailLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5rem;
  color: white;
`;

export const ThumbnailBox = styled.a`
  text-decoration: none;
  animation: ${ThumbnailAnimation} 0.5s ease-out forwards;
`;

export const Thumbnail = styled.img`
  width: 17rem;
  height: 14rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;
