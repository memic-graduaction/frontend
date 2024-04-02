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
    width: 25%;
    height: 100%;
    border-radius: 20px;
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
  background: yellow;
  width: 75%;
  height: 100%;
  border-radius: 20px;
  margin-left: 10px;
`