import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilValue } from 'recoil';
import { menuState } from '../../recoil/states'; 

const TitleContainer = styled.div`
    display: flex;
    width: auto;
    height: 18%;
    flex-direction: column;
    background: #FFFFFF;
    color: #000000;
    border-radius: 20px;
    padding: 25px;
`

const TitleText = styled.div`
    display: flex;
    font-size: 2.5rem;
    font-weight: 400;
`

const CalendarText = styled.div`
  display: flex;
  width: 11%;
  font-size: 1rem;
  margin-top: 20px;

  .react-datepicker__input-container input {
    width: 100%;
    border: none; 
    outline: none; 
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
  }
`;

function TopTitleIndex() {
  const [selectedDate, setSelectedDate] = useState(null);
  const menu = useRecoilValue(menuState);

  return (
    <TitleContainer>
      <TitleText>{`${menu}`}</TitleText>
      <CalendarText>
        <DatePicker
          selected={selectedDate}
          dateFormat="yyyy.MM ▾"
          onChange={(date) => setSelectedDate(date)}
          shouldCloseOnSelect
          showMonthYearPicker
          placeholderText="날짜선택 ▾"
        />
      </CalendarText>
    </TitleContainer>
  );
}

export default TopTitleIndex;
