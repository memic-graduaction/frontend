import styled from 'styled-components';
import Colors from 'src/styles/Colors';

export const Layout = styled.div`
  width: 100%;
  height: 42.9rem;
  background: white;
  padding: 1.5rem;
  overflow-y: auto;
  border-radius: 1rem;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
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
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const NormalText = styled.div`
  width: 73%;
  height: auto;
  color: #696565;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 500;
  margin-left: 3%;
  line-height: 1.5;
`;

export const NormalTime = styled.div`
  width: 12%;
  color: rgba(255, 92, 92, 0.5);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
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
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-left: 1rem;
`;

export const DownLoadBtn = styled.button`
  color: #6c6c6c;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
`;

export const Border = styled.div`
  width: 100%;
  height: 1px;
  background: #222222;
  margin: 1rem 0;
`;

// 녹음버튼 레이아웃
export const RecBtnLayout = styled.div`
  width: 9%;
  right: 0;
  height: 1.875rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #222222;
  border-radius: 1.5rem;
  padding: 2px;
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
  margin-right: 5%;
`;

export const RecordText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #222222;
`;
