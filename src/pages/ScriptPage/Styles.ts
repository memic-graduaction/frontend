import styled from 'styled-components';
import Colors from 'src/styles/Colors';

export const Layout = styled.div`
  background: ${Colors.BgScript};
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
`;

export const MainContainer = styled.div`
  background: white;
  height: 100%;
  width: 46%;
  border-radius: 2rem;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25) inset;
  padding: 3rem;
  margin-left: 3%;
  margin-right: 1%;
`;

export const SubContainer = styled.div`
  height: 100%;
  width: 46%;
`;

export const RightBox = styled.div`
  width: 100%;
  height: auto;
`;

export const BtmContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const PlayerContainer = styled.div`
  width: 30rem;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
`;
