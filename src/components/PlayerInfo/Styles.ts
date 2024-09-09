import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const TitleLayout = styled.div`
  background: white;
  display: flex;
  width: 100%;
  height: auto;
  line-height: 1.5;
  flex-direction: row;
`;

export const TitleContent = styled.div`
  width: 100%;
  height: auto;
  font-size: 1.4rem;
  border: 0;
  font-weight: 600;
`;

export const Border = styled.div`
  width: 100%;
  height: 0.0625rem;
  background: #c9c9c9;
  margin: 2% 0;
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  flex-direction: row;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 5%;
  position: relative;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1rem 0;
`;

export const AuthorContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
`;

export const AuthorImage = styled.img`
  display: flex;
  border-radius: 50%;
  overflow: hidden;
  width: 2.5rem;
  height: 2.5rem;
`;

export const AuthorContent = styled.div`
  display: flex;
  margin-left: 3%;
  font-size: 1.2rem;
`;
