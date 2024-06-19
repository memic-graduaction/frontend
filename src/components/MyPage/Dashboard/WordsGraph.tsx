import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useRecoilValue } from 'recoil';
import { selectedDateState, UUid } from '../../../recoil/states';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
      const lastDay = new Date(year, month, 0).getDate(); // Get the last day of the month

      try {
        const response = await axios.get<DataItem[]>(`/v1/recognized-sentences/counts?year=${year}&month=${month}`, {
          headers: {
            Authorization: `${user.accessToken}`,
          },
        });

        if (Array.isArray(response.data)) {
          const completeData = Array.from({ length: lastDay }, (_, index) => {
            const date = index + 1;
            const dataItem = response.data.find((item) => item.date === date);
            return {
              date,
              count: dataItem ? dataItem.count : 0,
            };
          });
          setData(completeData);
        } else {
          console.error('Unexpected response data format:', response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (user.accessToken && selectedDate) {
      fetchData();
    }
  }, [selectedDate, user.accessToken]);

  const chartData = {
    labels: data.map((item) => item.date.toString()),
    datasets: [
      {
        label: 'Count',
        data: data.map((item) => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Count',
        },
        beginAtZero: true,
        max: 50,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <Container>
      <MainTitle>My Study Chart</MainTitle>
      <Separator />
      <ChartWrapper>
        <ChartContainer>
          <Bar data={chartData} options={options} />
        </ChartContainer>
      </ChartWrapper>
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
  margin: 0;
`;

const ChartWrapper = styled.div`
  flex: 1; 
  display: flex;
  width: 100%;
  overflow-x: auto;
`;

const ChartContainer = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  height: auto; 
  padding-bottom: 20px;
  position: relative;
  justify-content: center;
`;

const MainTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 5px;
  color: #333;
`;

const Separator = styled.div`
  border-top: 1px solid #A3A3A3;
  margin: 10px 0;
`;
