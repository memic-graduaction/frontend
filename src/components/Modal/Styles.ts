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
  width: 52rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 2rem 2rem 3rem 0 rgba(0, 0, 0, 0.25);
  z-index: 0;
`;

export const ModalBody = styled.div`
  padding: 2rem;
  border: 1px solid red;
`;

export const ExitBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
