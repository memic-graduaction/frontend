import styled from 'styled-components';
import Colors from 'src/styles/Colors';


export const Layout = styled.div`
    background: ${Colors.BgMPMain};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background: #DBDBDB;
    display: flex;
    width: 95%;
    height: 90vh;
    border-radius: 20px;
    padding: 10px;
`

export const IndexContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    width: 350px;
    height: 100%;
    border-radius: 20px;
    flex-grow: 0;
`;

export const LogoLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  gap: 0.5rem;
  margin-top: 30px;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: none;
  width: 80%;
  height: 100%;
  border-radius: 20px;
  margin-left: 10px;
  gap: 10px;

  &.dashboard-width {
    width: 55%;
  }
`

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  gap: 10px;
`