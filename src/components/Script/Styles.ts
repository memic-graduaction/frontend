import styled, { keyframes } from 'styled-components';
import Colors from 'src/styles/Colors';

type buttonProps = {
  $isselected: boolean;
  $xy: { x: number; y: number };
};

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to{
    opacity: 3;
    transform: none;
  }
`;

export const Layout = styled.div`
  width: 100%;
  height: 42.9rem;
  background: white;
  padding: 1rem 1.5rem;
  overflow-y: auto;
  border-radius: 1rem;
  box-shadow:
    2px 2px 10px rgba(0, 0, 0, 0.3),
    inset -2px -2px 10px rgba(0, 0, 0, 0.3),
    inset 2px 2px 10px rgba(255, 255, 255, 0.2);
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 6px;
    background: ${Colors.CpScript};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1.25rem;
    background: rgba(217, 217, 217, 0.6);
  }
`;

export const TextLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
`;

export const TimeBox = styled.div`
  width: 12%;
  color: rgba(255, 92, 92, 0.5);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
`;

export const ScrapButton = styled.button<buttonProps>`
  display: ${(props) => (props.$isselected ? 'block' : 'none')};
  position: absolute;
  left: ${(props) => `${props.$xy.x}px`};
  top: ${(props) => `${props.$xy.y}px`};
  border-radius: 1rem;
  color: white;
  background: #c56697;
  padding: 0.3rem 0.5rem;
  font-weight: 500;
  animation: ${fadeIn} 0.1s ease-in-out;
  gap: 0.5rem;
  z-index: 1;
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.3),
    inset -2px -2px 5px rgba(0, 0, 0, 0.1),
    inset 2px 2px 5px rgba(255, 255, 255, 0.2);
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const ScriptSmall = styled.div`
  color: #222222;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 600;
  margin-left: 0.5rem;
`;

export const Border = styled.div`
  width: 100%;
  height: 1px;
  background: #222222;
  margin: 1rem 0;
`;

// 녹음버튼 레이아웃
export const RecBtnLayout = styled.div`
  width: 12%;
  right: 0;
  height: 1.875rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 1.5rem;
  padding: 1px;
  margin-left: auto;

  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const RecordIcon = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #ff0000;
  margin-left: 10%;
  margin-right: 7%;
`;

export const RecordText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #222222;
`;
