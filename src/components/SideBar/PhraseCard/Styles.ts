import styled from 'styled-components';

interface Props {
  isSelected: boolean;
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
    props.isSelected ? '1px 1px 15px rgba(100 0 50 / 40%);' : '1px 1px 10px rgba(0 0 0 / 15%);'};
`;

export const IconBox = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const PhraseBox = styled.div<Props>`
  color: ${(props) => (props.isSelected ? '#ff5c5c' : '#4f4957')};
  font-size: 1.25rem;
  font-weight: 500;
`;

export const MeaningBox = styled.div`
  color: #4f4957;
  font-size: 1rem;
  font-weight: 300;
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

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 16rem;
`;
