import React from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar';
import WordTable from './WordTable';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 2rem;
  flex-direction: column;
  background: #ffffff;
  color: #000000;
  border-radius: 20px;
  padding: 30px;
`;

function App() {
  return (
    <Container>
      <SearchBar placeholder="단어나 뜻, 해시태그를 입력해주세요" />
      <WordTable />
    </Container>
  );
}

export default App;
