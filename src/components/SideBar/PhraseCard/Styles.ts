import styled from 'styled-components';

interface Props {
  $isselected: boolean;
}

export const Layout = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 20rem;
  border-radius: 0.625rem;
  background: white;
  position: relative;
  padding: 1rem;
  padding-top: 2rem;
  border-radius: 0.3125rem;
  border: 1.5px solid #d7d7d7;
  background: #fcfcfc;
  box-shadow: ${(props) =>
    props.$isselected ? '1px 1px 10px rgba(180 50 100 / 50%);' : '1px 1px 5px rgba(0 0 0 / 15%);'};
`;

export const IconBox = styled.button`
  position: absolute;
  top: 0.5rem;
  left: 0;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PhraseBox = styled.div<Props>`
  color: ${(props) => (props.$isselected ? '#ff5c5c' : '#4f4957')};
  font-size: 1.1rem;
  font-weight: 500;
`;

export const MeaningBox = styled.div`
  color: #72214b;
  font-size: 1rem;
  font-weight: 600;
`;

export const HashTagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.9rem;
  align-items: center;
`;

export const HashTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 3rem;
  font-size: 0.9rem;
  color: #3b2172;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 0.7rem;
  justify-content: flex-end;
  padding-right: 0.5rem;
`;

export const Button = styled.button`
  display: flex;
  width: 4rem;
  height: 1.3rem;
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid #5a4e6a;
  color: white;
  background: #4f4957;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.3),
    inset -2px -2px 5px rgba(0, 0, 0, 0.3),
    inset 2px 2px 5px rgba(255, 255, 255, 0.2);
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 90%;
  height: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #72214b;
  border: 1.5px solid #d7d7d7;
  border-radius: 1rem;
  background: white;
`;
