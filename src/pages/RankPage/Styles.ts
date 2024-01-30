import styled from 'styled-components';
import Colors from 'src/styles/Colors';


export const Layout = styled.div`
    background: ${Colors.BgMain2};
    height: 100vh;
`;

export const Title = styled.div`
    color: white;
    font-size: 4rem;
    line-height: 1.5;
    text-align: center;
    margin-top: 10%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3%;
    padding-left: 10rem;
    padding-right: 10rem;
`
export const Preview = styled.img`
  width: 23rem; 
  height: 20rem; 
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); 
`;

