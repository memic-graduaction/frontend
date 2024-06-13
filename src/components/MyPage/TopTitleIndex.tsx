import React, { useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { menuState, selectedDateState } from 'src/recoil/states';

const TitleContainer = styled.div<{ isShortMenu: boolean }>`
    display: flex;
    width: auto;
    height: ${(props) => (props.isShortMenu ? 'auto' : 'auto')};
    flex-direction: column;
    background: #FFFFFF;
    color: #000000;
    border-radius: 20px;
    padding: 30px;
`

const TitleText = styled.div`
    display: flex;
    font-size: 2.2rem;
    font-weight: 500;
`

const CalendarText = styled.div`
  display: flex;
  width: 6%;
  height: 100%;
  font-size: 1.3rem;
  margin-top: 10px;

  .react-datepicker__input-container input {
    width: 100%;
    height: 100%;
    border: none; 
    outline: none; 
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
  }
`;

function TopTitleIndex() {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const menu = useRecoilValue(menuState);

  const isShortMenu = menu === '개인정보 수정' || menu === 'Words';
  const isDatePickerVisible = () => menu !== '개인정보 수정' && menu !== 'Words';

  useEffect(() => {
    if (selectedDate === null) {
      setSelectedDate(new Date()); // 컴포넌트가 마운트될 때 현재 날짜로 설정
    }
  }, [selectedDate]);

  return (
    <TitleContainer isShortMenu={isShortMenu}>
      <TitleText>{`${menu}`}</TitleText>
      {isDatePickerVisible() && (
        <CalendarText>
          <DatePicker
            selected={selectedDate}
            dateFormat="yyyy.MM ▾"
            onChange={(date) => setSelectedDate(date)}
            shouldCloseOnSelect
            showMonthYearPicker
          />
        </CalendarText>
      )}
    </TitleContainer>
  );
}

export default TopTitleIndex;