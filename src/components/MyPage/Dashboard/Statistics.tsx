import React, { useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { amountState, UUid, selectedDateState } from 'src/recoil/states';
import styled from 'styled-components';

function App() {
  const selectedDate = useRecoilValue(selectedDateState);
  const user = useRecoilValue(UUid);
  const [amount, setAmount] = useRecoilState(amountState);

  useEffect(() => {
    const fetchData = async () => {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1;

      try {
        const response = await axios.get(`/v1/statistics?year=${year}&month=${month}`, {
          headers: {
            Authorization: `${user.accessToken}`,
          },
        });

        const { visitedDays, records, convert } = response.data;
        console.log(response.data);
        setAmount((prev) => ({
          ...prev,
          visitedDays,
          records,
          convert,
        }));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;

          if (axiosError.response) {
            // 서버가 상태 코드를 반환했으며 2xx 범위에 있지 않음
            console.error('Error response:', axiosError.response.data);
            console.error('Error status:', axiosError.response.status);
            console.error('Error headers:', axiosError.response.headers);
          } else if (axiosError.request) {
            // 요청이 이루어졌으나 응답을 받지 못함
            console.error('Error request:', axiosError.request);
          } else {
            // 오류를 발생시킨 요청 설정 문제
            console.error('Error message:', axiosError.message);
          }
          console.error('Error config:', axiosError.config);
        } else {
          // Axios가 아닌 다른 오류
          console.error('Unexpected error:', error);
        }
      }
    };
    fetchData();
  }, [selectedDate, user.accessToken, setAmount]);


  return (
    <Container>
      <Content>
        <ContentItem>
          <ContentTitle>Visit</ContentTitle>
          <VisitAmount>{amount.visitedDays.length}</VisitAmount>
        </ContentItem>
        <ContentItem>
          <ContentTitle>Record</ContentTitle>
          <RecordAmount>{amount.records}</RecordAmount>
        </ContentItem>
        <ContentItem>
          <ContentTitle>Convert</ContentTitle>
          <ConvertAmount>{amount.convert}</ConvertAmount>
        </ContentItem>
      </Content>
    </Container>
  );
}

export default App;


const Container = styled.div`
    display: flex;
    height: 10%;
    width: 100%;
    flex-direction: row;
    background: #fff;
    color: #2C3E50;
    padding: 10px;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
    align-items: center;
`
const Content = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  padding: 20px;
`

const ContentItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30%;
`;

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
