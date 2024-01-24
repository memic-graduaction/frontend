import styled from 'styled-components';
import Colors from 'src/styles/Colors';

export const Layout = styled.div`
  width: 100%;
  height: 18.625rem;
  background: ${Colors.CpScript};
  color: white;
  padding: 2rem 3rem;
  overflow-y: scroll;
  overflow-x: hidden;
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
  height: 3.25rem;
  display: flex;
  align-items: center;
  margin: 1rem;
  cursor: pointer;
`;

export const NormalText = styled.div`
  color: #696565;
  font-size: 2.1875rem;
  font-style: normal;
  font-weight: 500;
`;

export const FocusText = styled(NormalText)`
  color: white;
  text-decoration-line: underline;
`;

export const NormalTime = styled.div`
  width: 6rem;
  color: rgba(255, 92, 92, 0.5);
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 500;
  margin-right: 2rem;
`;

export const FocusTime = styled(NormalTime)`
  color: #ff5c5c;
`;
