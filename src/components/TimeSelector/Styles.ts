import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  background: white;
  border-radius: 1rem;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem;
`;

// Record 제목과 아이콘 있는 왼쪽 레이아웃
export const LeftLayout = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// 나머지 레이아웃
export const MidLayout = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// 녹음버튼 레이아웃
export const RightLayout = styled.div`
  width: 10%;
  height: 1.875rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #222222;
  border-radius: 1.5rem;
  padding: 2px;
`;

// location 아이콘, time box 한개
export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const TimeBox = styled.div`
  width: 9.8125rem;
  height: 1.875rem;
  background: #d9d9d9;
  border-radius: 0.625rem;
  margin-left: 1rem;
`;

export const RecordIcon = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #ff0000;
  margin-left: 10%;
  margin-right: 5%;
`;

export const Title = styled.div`
  width: 8rem;
  height: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 0.2rem solid #222222;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  color: #222222;
`;

export const RecordText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #222222;
`;
