import styled from 'styled-components';

interface Props {
  $isselected: boolean;
}

export const Layout = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 23rem;
  border-radius: 0.625rem;
  background: white;
  position: relative;
  margin: 1rem;
  padding: 1rem;
  box-shadow: ${(props) =>
    props.$isselected ? '1px 1px 15px rgba(100 0 50 / 40%);' : '1px 1px 10px rgba(0 0 0 / 15%);'};
`;

export const IconBox = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const PhraseBox = styled.div<Props>`
  color: ${(props) => (props.$isselected ? '#ff5c5c' : '#4f4957')};
  font-size: 1.25rem;
  font-weight: 600;
`;

export const MeaningBox = styled.div`
  color: #4f4957;
  font-size: 1rem;
  font-weight: 400;
`;

export const HashTagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const HashTag = styled.div`
  display: flex;
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
  gap: 0.7rem;
  justify-content: flex-end;
  padding-right: 0.5rem;
`;

export const CancelBtn = styled.button`
  display: flex;
  width: 5rem;
  height: 1.5rem;
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid #5a4e6a;
  color: #5a4e6a;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
`;

export const SubmitBtn = styled(CancelBtn)`
  color: white;
  background: #5a4e6a;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 90%;
  height: 2rem;
  font-size: 1rem;
`;
