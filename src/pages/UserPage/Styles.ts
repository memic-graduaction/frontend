import styled from 'styled-components';
import Colors from 'src/styles/Colors';


export const Layout = styled.div`
    background: ${Colors.BgLogin};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background: #FFFFFF;
    display: flex;
    width: 70%;
    height: 70vh;
    border-radius: 30px;
`

export const LogoLayout = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  gap: 0.5rem;
  color: #FFFFFF;
  margin-bottom: 30%;
`;

export const IndexContainer = styled.div`
    display: flex;
    background: ${Colors.BgMain};
    flex-direction: column;
    width: 35%;
    padding: 50px;
    border-radius: 30px 0 0 30px;
`

export const IndexText = styled.div`
    display: flex;
    font-size: 3.5rem;
    line-height: 1.8;
    color: #FFFFFF;
    font-weight: bold;
`

export const LoginContainer = styled.div`
    display: flex;
    width: 65%;
    background: none;
    padding: 10% 13%;
    flex-direction: column;
`

export const SignUpContainer = styled.div`
    color: #B5B5B5; 
    font-size: 0.8rem;
    margin-top: 10px; 
`

export const SignUpLink = styled.span`
    color: #6C6C6C;
    cursor: pointer; 
    margin-left: 5px; 
`