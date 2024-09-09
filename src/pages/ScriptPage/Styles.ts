import styled from 'styled-components';
import Colors from 'src/styles/Colors';

export const Layout = styled.div`
  background: ${Colors.BgScript};
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const MainLayout = styled.div`
  height: 42.9rem;
  display: flex;
  flex-direction: row;
  margin-top: 2.5rem;
`;

export const MainContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 40%;
  border-radius: 1rem;
  padding: 2rem;
  margin-left: 3%;
  margin-right: 1%;
  box-shadow:
    2px 2px 10px rgba(0, 0, 0, 0.3),
    inset -2px -2px 10px rgba(0, 0, 0, 0.3),
    inset 2px 2px 10px rgba(255, 255, 255, 0.2);
`;

export const SubContainer = styled.div`
  height: 100%;
  width: 53%;
  border-radius: 1rem;
`;
