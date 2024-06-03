import React, { useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilValue, useRecoilState } from 'recoil';
import { menuState, selectedDateState } from '../../recoil/states';

interface TopTitleIndexProps {
  onDateChange: (date: Date) => void;
}

function TopTitleIndex({ onDateChange }: TopTitleIndexProps) {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  const handleDateChange = (date: Date) => {
    const newDate = new Date(date.getFullYear(), date.getMonth());
    setSelectedDate(newDate);
    onDateChange(newDate);
    console.log(formatDateToPlaceholder(newDate));
  };

  const menu = useRecoilValue(menuState);

  const isDashboard = menu === 'Dashboard';
  const isDatePickerVisible = () => menu !== '개인정보 수정' && menu !== 'Words';

  useEffect(() => {
    if (!selectedDate) {
      const today = new Date();
      setSelectedDate(today);
    }
  }, [selectedDate, setSelectedDate]);

  const formatDateToPlaceholder = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}.${month} ▾`;
  };

  return (
    <TitleContainer>
      <TitleText>{`${menu}`}</TitleText>
      {isDatePickerVisible() && (
        <CalendarText isDashboard={isDashboard}>
          <DatePicker
            selected={selectedDate}
            dateFormat="yyyy.MM ▾"
            onChange={handleDateChange}
            shouldCloseOnSelect
            showMonthYearPicker
            placeholderText={formatDateToPlaceholder(selectedDate)}
          />
        </CalendarText>
      )}
    </TitleContainer>
  );
}

export default TopTitleIndex;


const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    height: 15%;
    justify-content: center;
    flex-direction: column;
    background: #FFFFFF;
    color: #000000;
    border-radius: 20px;
    padding-left: 30px;
`

const TitleText = styled.div`
    display: flex;
    height: auto;
    font-size: 2rem;
    font-weight: 500;
`

const CalendarText = styled.div<{ isDashboard: boolean }>`
  display: flex;
  width: auto;
  height: auto;
  margin-top: 15px;

  .react-datepicker__input-container input {
    width: 50%;
    height: 100%;
    border: none; 
    outline: none; 
    font-size: 1rem;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
  }
`;