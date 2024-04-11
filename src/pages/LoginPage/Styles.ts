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
    width: 40%;
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
    width: calc(100% - 40%);
    background: none;
    flex-direction: column;
    padding: 10%;
`

export const TitleText = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10%;
`

export const IdBox = styled.div`
    display: flex;
    height: 15%;
    border-radius: 20px;
    border: 1px solid #C5C5C5;
    margin-bottom: 15px;
    padding: 5px 10px;
`

export const PwBox = styled.div`
    display: flex;
    position: relative;
    height: 15%;
    border-radius: 20px;
    border: 1px solid #C5C5C5;
    margin-bottom: 15px;
    padding: 5px 10px;
`

export const LoginBtn = styled.button`
    display: flex;
    height: 15%;
    border-radius: 20px;
    background: #6C6C6C;
    font-size: 1.3rem;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    margin-top: 50px;
`

export const Input = styled.input`
    width: 95%;
    height: auto;
    border: none;
    outline: none;
    font-size: 1rem;
`;

export const PwBtn = styled.button`
    color: #CDCDCD;
    cursor: pointer;
`