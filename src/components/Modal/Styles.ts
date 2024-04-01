import styled from 'styled-components';

export const BackLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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
  box-shadow: 2rem 2rem 3rem 0 rgba(0, 0, 0, 0.25);
  z-index: 0;
`;

export const ModalBody = styled.div`
  padding: 2rem;
`;

export const ExitBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const RoundBtn = styled.button`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2.5rem;
`;

export const SquareBtnLayout = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 2rem;
`;

export const SquareBtnBox = styled.button`
  width: 11.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4375rem;
  box-shadow: 1px 1px 5px 0px rgba(16, 16, 16, 0.25);
  gap: 0.5rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 350;
`;
