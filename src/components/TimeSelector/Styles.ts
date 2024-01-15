import Colors from 'src/styles/Colors';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  width: 26.5625rem;
  height: 9.4375rem;
  border-radius: 0.625rem;
  background: ${Colors.CpScript};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;
`;

// Record 제목과 아이콘 있는 왼쪽 레이아웃
export const LeftLayout = styled.div`
  width: 40%;
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// location 아이콘, timebox 있는 중간 레이아웃
export const MidLayout = styled.div`
  width: 60%;
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-betwwen;
  margin-left: 1.5rem;
`;

// switch 아이콘 있는 오른쪽 레이아웃
export const RightLayout = styled.div`
  margin-left: 1rem;
`;

// location 아이콘, time box 한개
export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TimeBox = styled.div`
  width: 9.8125rem;
  height: 1.875rem;
  background: #d9d9d9;
  border-radius: 0.625rem;
`;

export const Title = styled.div`
  width: 8rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 0.2rem solid white;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  color: white;
`;
