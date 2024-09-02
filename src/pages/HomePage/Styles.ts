import styled, { keyframes } from 'styled-components';
import Colors from 'src/styles/Colors';

const Animation = keyframes`
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
  background: ${Colors.BgMain};
  height: 100vh;
`;

export const SearchBar = styled.div`
  width: 80vw;
  height: 6vw;
  background: #ffffff;
  display: flex;
  border-radius: 10px;
  align-items: center;
  margin-left: 10vw;
  font-size: 2rem;
  box-shadow:
    2px 2px 10px rgba(0, 0, 0, 0.3),
    inset -2px -2px 10px rgba(0, 0, 0, 0.3),
    inset 2px 2px 10px rgba(255, 255, 255, 0.2);
`;

export const Title = styled.div`
  color: white;
  font-size: 4vw;
  margin-top: 10vw;
  margin-left: 10vw;
  margin-bottom: 5vw;
  line-height: 1.5;
  animation: ${Animation} 0.5s ease-out forwards;
`;

export const T = styled.span`
  font-weight: 100;
`;

export const Guide = styled.div`
  margin-left: 3rem;
  margin-right: 3rem;
`;

export const Input = styled.input`
  margin-left: 3rem;
  border: none;
  font-size: 1.5rem;
  width: 58vw;
`;

export const ScrollIcon = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2.5rem;
  margin-bottom: 1rem;
`;
