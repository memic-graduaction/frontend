import styled from 'styled-components';
import Colors from 'src/styles/Colors';

export const Layout = styled.div`
  background: ${Colors.BgMPMain};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #433E49;
  width: auto;
  flex-grow: 1;
  height: 100%;
  padding-top: 15px;
`;

export const LogoLayout = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  gap: 0.5rem;
  margin: 30px 0 30px 60px;
  color: #f1f1f1;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  border-radius: 20px;
  padding: 13px 80px;
  overflow: auto;
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 15px;
`;

export const OuterContainer = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin: 15px 0;
  overflow: hidden;
`;

export const ScrollableContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
