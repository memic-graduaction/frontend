import React from 'react';
import styled from 'styled-components';
import RecentVideo from './RecentVideo';
import WordsGraph from './WordsGraph';
import Statistics from './Statistics';
import Calendar from './Calendar';

const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 150%;
    flex-direction: column;
    background: none;
    gap: 25px;
    overflow: auto;
`

const GraphCalContainer = styled.div`
  width: 100%;
  height: auto;
  gap: 20px;
  display: flex;
  flex-direction: row;
`;

const RecentVideoContainer = styled.div`
  width: 100%;
  height: 90%;
  overflow: auto;
`;

function App() {
  return (
    <MainContainer>
      <Statistics />
      <GraphCalContainer>
        <WordsGraph />
        <Calendar />
      </GraphCalContainer>
      <RecentVideoContainer>
        <RecentVideo />
      </RecentVideoContainer>
    </MainContainer>
  );
}

export default App;