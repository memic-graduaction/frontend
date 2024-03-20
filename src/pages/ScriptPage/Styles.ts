import styled from 'styled-components';
import Colors from 'src/styles/Colors';

export const Layout = styled.div`
  background: ${Colors.BgScript};
  height: 90%;
  margin: 0;
  padding: 0;
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2.5rem;
`;

export const MainContainer = styled.div`
  background: white;
  height: 100%;
  width: 46%;
  border-radius: 1rem;
  padding: 3rem;
  margin-left: 3%;
  margin-right: 1%;
`;

export const SubContainer = styled.div`
  height: 100%;
  width: 46%;
`;
