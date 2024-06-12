import React from 'react';
import styled from 'styled-components';
import RecentVideo from './RecentVideo';
import WordsGraph from './WordsGraph';

const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background: none;
    gap: 10px;
    box-sizing: border-box;
`

const WordsGraphContainer = styled.div`
  flex: 0 0 calc(40% - 5px);
  overflow: auto;
`;

const RecentVideoContainer = styled.div`
  flex: 0 0 calc(60% - 5px); 
  overflow: auto;
`;

function App() {
  return (
    <MainContainer>
      <WordsGraphContainer>
        <WordsGraph />
      </WordsGraphContainer>
      <RecentVideoContainer>
        <RecentVideo />
      </RecentVideoContainer>
    </MainContainer>
  );
}

export default App;