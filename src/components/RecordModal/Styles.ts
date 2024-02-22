import styled from 'styled-components';

export const Layout = styled.div`
  width: 71.4375rem;
  height: 41.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: white;
  border: 1px solid red;
  position: relative;
`;

export const IconBox = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const TextBlack = styled.div`
  color: #4a4a4a;
  text-align: center;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 700;
`;
