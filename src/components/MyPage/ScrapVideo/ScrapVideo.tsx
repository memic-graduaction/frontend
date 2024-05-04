import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: auto;
    height: 100%;
    flex-direction: column;
    background: #FFFFFF;
    color: #000000;
    border-radius: 20px;
    padding: 30px;
`

function App() {
  return (
    <Container>
      스크랩 동영상 목록
    </Container>
  );
}

export default App;