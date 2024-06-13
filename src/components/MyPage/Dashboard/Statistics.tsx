import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Title>통계</Title>
      <Separator />
      <Content>
        <ContentTitle>
          <div>Visit</div>
          <div>Record</div>
          <div>Convert</div>
        </ContentTitle>
        <ContentAmount>
          <VisitAmount>20</VisitAmount>
          <RecordAmount>7</RecordAmount>
          <ConvertAmount>13</ConvertAmount>
        </ContentAmount>
      </Content>
    </Container>
  );
}

export default App;


const Container = styled.div`
    display: flex;
    height: auto;
    flex-grow: 1;
    flex-direction: column;
    background: #2C2A3E;
    color: #FFFFFF;
    border-radius: 20px;
    padding: 30px;
    margin-left: 10px;
`
const Title = styled.div`
    font-size: 1.3rem; 
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 20px;
`;

const Separator = styled.div`
    border-top: 1px solid #A3A3A3;
    margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  height: auto;
  flex-direction: row;
  gap: 10px;
`

const ContentTitle = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding: 8px 0;
  margin-left: 30px;
  gap: 25px;
`

const ContentAmount = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  margin-right: 20px;
`;

const Amount = styled.div`
  font-size: 1rem;
`;

const VisitAmount = styled(Amount)``;
const RecordAmount = styled(Amount)``;
const ConvertAmount = styled(Amount)``;
