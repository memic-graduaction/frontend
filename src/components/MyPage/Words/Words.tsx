import React, { useState } from 'react';
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
  const [queries, setQueries] = useState([]);
  return (
    <Container>
      <SearchBar placeholder="검색하고 싶은 단어나 뜻을 입력해주세요" setQueries={setQueries} />
      <WordTable queries={queries} />
    </Container>
  );
}

export default App;
