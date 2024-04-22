import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background: none;
    flex-direction: column;
    height: 100%;
`

export const TitleText = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10%;
`

export const IdBox = styled.div`
    display: flex;
    height: 15%;
    border-radius: 10px;
    border: 1px solid #C5C5C5;
    margin-bottom: 15px;
    padding: 5px 10px;
`

export const PwBox = styled.div`
    display: flex;
    position: relative;
    height: 15%;
    border-radius: 10px;
    border: 1px solid #C5C5C5;
    margin-bottom: 15px;
    padding: 5px 10px;
`

export const LoginBtn = styled.button`
    display: flex;
    height: 15%;
    border-radius: 10px;
    background: #6C6C6C;
    font-size: 1.3rem;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    margin-top: 30px;
    margin-bottom: 30px;
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

export const MailChk = styled.button`
    color: #4AD827;
`

export const AskBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 0.8rem;
    height: 10%;
    color: #B5B5B5;
`

export const AccountText = styled.div`
    position: absolute;
    right: 0;
`

export const RememberText = styled.div`
    left: 0;
    display: flex;
    align-items: center;
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