import React from 'react';
import styled from 'styled-components';
import RecentVideo from './RecentVideo';
import WordsGraph from './WordsGraph';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background: none;
    gap: 10px;
`

function App() {
  return (
    <Container>
      <div style={{ flex: '0 0 40%' }}>
        <WordsGraph />
      </div>
      <div style={{ flex: '0 0 60%' }}>
        <RecentVideo />
      </div>
    </Container>
  );
}

export default App;