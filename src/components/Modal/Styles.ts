import styled from 'styled-components';

export const BackLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

export const ModalLayout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 42rem;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background: white;
  border-radius: 1rem;
  z-index: 3;
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.3),
    inset -2px -2px 5px rgba(0, 0, 0, 0.3),
    inset 2px 2px 5px rgba(255, 255, 255, 0.2);
`;

export const ModalBody = styled.div`
  padding: 2rem;
`;

export const ExitBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const RecordBtn = styled.button`
  width: 10rem;
  height: 2.6rem;
  border-radius: 1.1rem;
  display: flex;
  gap: 0.3rem;
  padding-left: 1rem;
  justify-content: center;
  align-items: center;
  background: #5a4e6a;
  font-size: 1.5rem;
  color: white;
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.3),
    inset -2px -2px 5px rgba(0, 0, 0, 0.3),
    inset 2px 2px 5px rgba(255, 255, 255, 0.2);
`;

export const ResultBtnLayout = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 1.5rem;
`;

export const ResultBtnBox = styled.button`
  width: 9.5rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
  background: #5a4e6a;
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.3),
    inset -2px -2px 5px rgba(0, 0, 0, 0.3),
    inset 2px 2px 5px rgba(255, 255, 255, 0.2);
  gap: 0.3rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  margin-top: 1rem;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c56697;
  font-size: 1.2rem;
  font-weight: 500;
`;
