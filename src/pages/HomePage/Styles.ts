import styled from 'styled-components';
import Colors from 'src/styles/Colors';

export const Layout = styled.div`
    background: ${Colors.BgMain};
    height: 100%;
`;

export const SearchBar = styled.div`
    width: 80vw;
    height: 6vw;
    background: #ffffff;
    display: flex;
    border-radius: 10px;
    align-items: center;
    margin-left: 10vw;
    font-size: 2rem;
`;

export const Title = styled.div`
    color: white;
    font-size: 5vw;
    margin-top: 10vw;
    margin-left: 10vw;
    margin-bottom: 5vw;
    line-height: 1.5;
`;

export const T = styled.span`
    font-weight: 100;
`;

export const Guide = styled.div`
    margin-left: 3rem;
    margin-right: 3rem;
`;

export const Input = styled.input`
    margin-left: 3rem;
    border: none;
    font-size: 1.5rem;
    width: 58vw;
`;

