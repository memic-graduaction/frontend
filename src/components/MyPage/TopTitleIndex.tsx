import React, { useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { menuState, selectedDateState } from 'src/recoil/states';

const TitleContainer = styled.div<{ isShortMenu: boolean }>`
    display: flex;
    width: auto;
    height: ${(props) => (props.isShortMenu ? '10%' : '13%')};
    flex-direction: row;
    background: none;
    color: #000000;
    border-radius: 20px;
    padding: 20px 30px;
    gap: 20px;
`

const TitleText = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
`

const CalendarText = styled.div`
  display: flex;
  align-items: center;

  .react-datepicker__input-container {
    width: 100%; /* 필요에 따라 크기를 조정할 수 있습니다 */
  }

  .react-datepicker__input-container input {
    border: none; 
    outline: none; 
    border-bottom: none;
    padding-bottom: 5px;
    background-color: transparent;
    font-size: 1.5rem; 
    font-weight: 200;
  }
`;

function TopTitleIndex() {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const menu = useRecoilValue(menuState);

  const isShortMenu = menu === '개인정보 수정' || menu === 'Words' || menu === 'Scrap Videos';
  const isDatePickerVisible = () => menu !== '개인정보 수정' && menu !== 'Words' && menu !== 'Scrap Videos';;

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