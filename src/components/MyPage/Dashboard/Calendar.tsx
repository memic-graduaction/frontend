import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedDateState, amountState, UUid } from 'src/recoil/states';
import 'react-calendar/dist/Calendar.css';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components';
import axios from 'axios';

const appTheme: DefaultTheme = {
  color: {
    pink: '#665f6e',
    brown: '#ffffff',
  },
};

function App() {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [amount, setAmount] = useRecoilState(amountState);
  const user = useRecoilValue(UUid);
  const [refresh, setRefresh] = useState(0);

  const fetchData = async (date: Date) => {
    if (!date) return;

    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    try {
      const response = await axios.get(`/v1/statistics?year=${year}&month=${month}`, {
        headers: {
          Authorization: `${user.accessToken}`,
        },
      });

      const { visitedDays, records, convert } = response.data;
      setAmount((prev) => ({
        ...prev,
        visitedDays,
        records,
        convert,
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(selectedDate);
  }, [selectedDate, user.accessToken, setAmount, refresh]);

  const handleDateChange = (value: Date | Date[]) => {
    if (Array.isArray(value)) {
      setSelectedDate(value[0]);
    } else {
      setSelectedDate(value);
    }
    setRefresh((prev) => prev + 1); // Refresh 상태 변경
  };

  const handleActiveStartDateChange = ({ activeStartDate }: { activeStartDate: Date }) => {
    setSelectedDate(activeStartDate);
    setRefresh((prev) => prev + 1); // Refresh 상태 변경
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const day = date.getDate();
      if (amount.visitedDays.includes(day)) {
        return <VisitedMarker />;
      }
    }
    return null;
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Container>
        <CustomCalendar
          locale="en"
          onChange={handleDateChange}
          onActiveStartDateChange={handleActiveStartDateChange}
          value={selectedDate}
          calendarType="gregory"
          view="month"
          prev2Label={null}
          next2Label={null}
          showNeighboringMonth={false}
          tileContent={tileContent}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
  flex-direction: column;
  color: #000000;
  border-radius: 20px;
  margin-left: 10px;
`;

const CustomCalendar = styled(Calendar)`
  height: 100%;
  width: auto;
  border: 2px solid #eaeaea;
  border-radius: 20px;

  .react-calendar__viewContainer {
    height: 100%;
    padding: 30px 0;
  }
  .react-calendar__month-view {
    height: auto;
    display: flex;
    align-items: center;
  }

  .react-calendar__navigation {
    background: ${({ theme }) => theme.color.pink};
    border-bottom: 4px solid ${({ theme }) => theme.color.brown};
    height: 15%;
    border-radius: 20px 20px 0 0;

    span {
      height: auto;
      font-size: 24px;
      font-weight: 800;
      color: ${({ theme }) => theme.color.brown};
    }
  }

  .react-calendar__navigation button:disabled {
    background-color: ${({ theme }) => theme.color.pink};
    border-radius: 20px 20px 0 0;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: ${({ theme }) => theme.color.pink};
    border-radius: 20px 20px 0 0;
  }

  .react-calendar__tile {
    text-align: center;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }

  .react-calendar__month-view__days__day {
    border: none;
    height: auto;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    border: 1px solid #ccc;
  }

  .react-calendar__tile--active {
    border: none;
  }
`;

const VisitedMarker = styled.div`
  width: 6px;
  height: 6px;
  background-color: #ff4c4c;
  border-radius: 50%;
  margin-top: 4px;
`;
