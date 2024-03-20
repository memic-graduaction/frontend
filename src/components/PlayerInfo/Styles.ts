import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TitleLayout = styled.div`
  background: white;
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 1rem;
  line-height: 1.5;
  flex-direction: row;
`;

export const TitleContent = styled.div`
  width: 90%;
  height: auto;
  font-size: 1.6rem;
  border: 0;
  font-weight: 600;
`;

export const StyledTag = styled.div`
  width: 100%;
  margin: 1rem 1rem 2rem 0;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Border = styled.div`
  width: 100%;
  height: 0.0625rem;
  background: #c9c9c9;
  margin: 1rem 0;
`;

export const HashTagBox = styled.div`
  width: 100%;
`;

export const HashTag = styled.button`
  height: 2.2rem;
  border-radius: 3rem;
  background: #707070;
  color: white;
  font-size: 1rem;
  font-weight: 300;
  margin-right: 1rem;
`;

export const PlusBtn = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #ff5c5c;
  color: white;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
`;

export const ButtonContainer = styled.div`
  width: 10%;
  position: relative;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1rem 0;
`;
