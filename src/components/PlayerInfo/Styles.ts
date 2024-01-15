import styled from 'styled-components';
import Colors from 'src/styles/Colors';

export const Layout = styled.div`
  width: 26.5625rem;
  height: 25.3125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Colors.CpScript};
  border-radius: 0.625rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;
`;

export const StyledInfo = styled.div`
  width: 100%;
  height: 4rem;
  border-bottom: 0.1px solid #c9c9c9;
  color: white;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  padding-top: 1.2rem;
  padding-left: 2.2rem;
`;

export const TitleLayout = styled.div`
  background: white;
  width: 22.5rem;
  height: 8.9375rem;
  border-radius: 0.625rem;
  color: black;
  margin-top: 1.5rem;
`;

export const StyledTitle = styled.div`
  width: 100%;
  height: 35%;
  border-bottom: 1px solid #696969;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  padding: 0.8rem;
`;

export const TitleContent = styled(StyledTitle)`
  height: 60%;
  font-size: 1.5rem;
  padding: 1.3rem;
  padding-left: 0.8rem;
  border: 0;
`;

export const StyledTag = styled.div`
  width: 100%;
  padding-left: 2.5rem;
  margin: 1rem 0;
  font-size: 1.8rem;
  font-weight: 500;
`;

export const HashTagBox = styled.div`
  width: 22.5rem;
`;

export const HashTag = styled.button`
  height: 2.0625rem;
  border-radius: 0.625rem;
  background: #707070;
  color: white;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  margin-right: 1.2rem;
  margin-bottom: 1rem;
`;

export const PlusBtn = styled.button`
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 2rem;
  color: white;
`;
