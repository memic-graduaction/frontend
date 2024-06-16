import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { selectedDateState, UUid } from '../../../recoil/states';

interface DataItem {
  date: number;
  count: number;
}

function WordsGraph() {
  const selectedDate = useRecoilValue(selectedDateState);
  const user = useRecoilValue(UUid);
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1;

      try {
        const response = await axios.get<DataItem[]>(`/v1/recognized-sentences/counts?year=${year}&month=${month}`, {
          headers: {
            Authorization: `${user.accessToken}`,
          },
        });

        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error('Unexpected response data format:', response.data);
        }

      } catch (error) {
        console.error(error);
      }
    };

    if (user.accessToken) {
      fetchData();
    }
  }, [selectedDate, user.accessToken]);

  return (
    <Container>
      <Title>My Study Chart</Title>
      <Separator />
      <DataList>
        {data.map((item) => (
          <StyledDataItem key={item.date}>
            Date: {item.date}, Count: {item.count}
          </StyledDataItem>
        ))}
      </DataList>
    </Container>
  );
}

export default WordsGraph;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: #fff;
  border-radius: 20px;
  padding: 20px 40px;
`;

const DataList = styled.div`
  margin-top: 20px;
`;

const StyledDataItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: #000000;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 5px;
  color: #333;
`;

const Separator = styled.div`
  border-top: 1px solid #A3A3A3;
  margin: 10px 0;
`;
