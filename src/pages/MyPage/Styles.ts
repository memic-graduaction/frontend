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
`

export const Separator = styled.div`
  border-bottom: 1px solid #ccc; 
  margin: 30px 30px 0 30px;
`

export const IndexContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    width: 350px;
    height: 100%;
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
  width: 80%;
  height: auto;
  border-radius: 20px;
  padding: 10px;
`

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: auto;
  gap: 10px;
`
export const OuterContainer = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
`;