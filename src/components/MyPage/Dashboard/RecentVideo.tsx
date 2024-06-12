import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    flex-direction: column;
    background: #fff;
    border-radius: 20px;
`

function App() {
  return (
    <Container>
      최신 비디오
    </Container>
  );
}

export default App;