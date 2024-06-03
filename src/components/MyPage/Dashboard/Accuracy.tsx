import React from 'react';
import styled from 'styled-components';

interface CircleGraphProps {
  percent: number;
}

function App() {
  const percent = 70; // 퍼센트 값을 조정하세요

  return (
    <Container>
      <Title>내 정확도</Title>
      <Separator />
      <CircleGraphContainer>
        <CircleGraph percent={percent}>
          <Percent>{percent}%</Percent>
        </CircleGraph>
      </CircleGraphContainer>
      <Encouragement>Just keep going !</Encouragement>
    </Container>
  );
}

export default App;

const Container = styled.div`
    display: flex;
    height: 60%;
    flex-direction: column;
    background: #FFFFFF;
    color: #000000;
    border-radius: 20px;
    padding: 30px;
    margin-left: 10px;
`;

const Title = styled.div`
    font-size: 1.5rem; 
    margin-bottom: 20px;
`;

const Separator = styled.div`
    border-top: 1px solid #A3A3A3;
    margin-bottom: 20px;
`;

const CircleGraphContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CircleGraph = styled.div<CircleGraphProps>`
  position: relative;
  width: 13em; 
  height: 13em;
  border-radius: 50%;
  background: conic-gradient(
    #D8CAFF 0%, 
    #D8CAFF ${(props) => props.percent}%, 
    transparent calc(100% - ${(props) => props.percent}%)
  );
  margin-top: 30px;
`;

const Percent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem; 
    color: #000000;
`;

const Encouragement = styled.div`
    text-align: center;
    font-size: 1.25rem; 
    font-weight: bold;
    margin-top: 30px;
`;
