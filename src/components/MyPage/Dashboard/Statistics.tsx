import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Content>
        <ContentTitle>Visit</ContentTitle>
        <VisitAmount>20</VisitAmount>
        <ContentTitle>Record</ContentTitle>
        <RecordAmount>7</RecordAmount>
        <ContentTitle>Convert</ContentTitle>
        <ConvertAmount>13</ConvertAmount>
      </Content>
    </Container>
  );
}

export default App;


const Container = styled.div`
    display: flex;
    height: 9%;
    width: 100%;
    flex-direction: row;
    background: #fff;
    color: #2C3E50;
    border-radius: 20px;
    padding: 20px;
    border: 4px solid #dfdfdf;
    align-items: center;
`
const Content = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 10px;
  padding: 20px;
`

const ContentTitle = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  font-size: 1.3rem;
  margin-left: 30px;
  gap: 30px;
`

const Amount = styled.div`
  font-size: 1.3rem;
`;

const VisitAmount = styled(Amount)``;
const RecordAmount = styled(Amount)``;
const ConvertAmount = styled(Amount)``;
