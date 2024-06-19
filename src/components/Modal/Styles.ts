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
  width: 48rem;
  height: 27rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background: white;
  border-radius: 1.5rem;
  z-index: 3;
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.25);
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
  height: 3.3rem;
  border-radius: 2rem;
  box-shadow: 1px 4px 4px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  gap: 0.5rem;
  padding-left: 1rem;
  justify-content: center;
  align-items: center;
  background: #ff5c5c;
  font-size: 2rem;
  color: white;
`;

export const ResultBtnLayout = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 2rem;
`;

export const ResultBtnBox = styled.button`
  width: 11.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.875rem;
  border: 0.5px solid #ff5c5c;
  background: #fff;
  box-shadow: 2px 2px 5px 0px rgba(246, 0, 0, 0.1);
  gap: 0.5rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 350;
  margin-top: 1rem;
`;

export const TitleBox = styled.div`
  width: 21rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff5c5c;
  background: #f6f6f6;
  border-radius: 0.625rem;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
`;
