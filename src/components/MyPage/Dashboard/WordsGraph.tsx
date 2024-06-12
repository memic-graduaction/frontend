import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { ResponsiveLine } from '@nivo/line';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { selectedDateState, UUid } from '../../../recoil/states';

function App() {
  const selectedDate = useRecoilValue(selectedDateState);
  const user = useRecoilValue(UUid);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1;

      try {
        const response = await axios.get(`/v1/recognized-sentences/counts?year=${year}&month=${month}`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`, // UUid에서 가져온 accessToken 사용
          },
        });
        setData(response.data);
        console.log(setData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (user.accessToken) {
      fetchData(); // 토큰이 있을 때만 fetchData 호출
    }
  }, [selectedDate, user.accessToken]);

  return (
    <Container>
      <DataList>
        {data.map((item) => (
          <DataItem key={item.date}>
            Date: {item.date}, Count: {item.count}
          </DataItem>
        ))}
      </DataList>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: #fff;
  border-radius: 20px;
  padding: 30px;
`;

const DataList = styled.div`
  margin-top: 20px;
`;

const DataItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: #000000;
`;