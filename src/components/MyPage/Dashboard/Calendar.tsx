import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components';

export type DatePiece = Date | null;
export type SelectedDate = DatePiece | [DatePiece, DatePiece];

const appTheme: DefaultTheme = {
  color: {
    pink: '#dbf1ff',
    brown: '#604a4a'
  }
};

function App() {
  const [selectedDate, setSelectedDate] = useState<SelectedDate>(new Date());

  return (
    <ThemeProvider theme={appTheme}>
      <Container>
        <CustomCalendar
          locale="en"
          onChange={setSelectedDate}
          value={selectedDate}
          calendarType="gregory"
          view="month"
          prev2Label={null}
          next2Label={null}
          showNeighboringMonth={false}
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
    height: 75%;
  }
  .react-calendar__month-view {
    height: 100%;
    display:flex;
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
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .react-calendar__month-view__days__day{
    border: none;
    height: 45px;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    border: 1px solid #ccc;

  }

  .react-calendar__tile--active {
    border: none;
  }
`;
