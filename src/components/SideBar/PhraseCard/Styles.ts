import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 27.125rem;
  border-radius: 0.625rem;
  background: white;
  position: relative;
  padding: 1rem;
  box-shadow: 0 0 10px 1px rgba(0 0 0 / 15%);
`;

export const IconBox = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const PhraseBox = styled.div`
  color: #4f4957;
  font-size: 1.25rem;
  font-weight: 500;
`;

export const MeaningBox = styled(PhraseBox)`
  font-size: 1rem;
  font-weight: 300;
`;

export const HashTagBox = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
`;

export const HashTag = styled.div`
  display: flex;
  width: 5rem;
  height: 1.6875rem;
  padding: 0.5rem 0.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 3rem;
  background: #b8a0ff;
  color: white;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

export const SubmitBtn = styled.button`
  display: flex;
  width: 4.2rem;
  height: 1.44rem;
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  background: #9f93af;
  color: white;
`;
