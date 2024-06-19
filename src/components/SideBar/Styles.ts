import styled from 'styled-components';

type Props = {
  $isopen: boolean;
};

export const BackLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const Layout = styled.div<Props>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.$isopen ? '0' : '-30rem')};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 0 0.625rem 0.625rem 0;
  height: 100vh;
  width: 30rem;
  background: #efefef;
  padding: 1.5rem 0 1.5rem 2rem;
  transition: all 0.2s ease-in;
  z-index: 3;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.2rem;
  color: #5a4e6a;
  font-size: 1.25rem;
  font-weight: 500;
`;

export const IconBox = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.2rem;
  width: 3rem;
  height: 7rem;
  border-radius: 0 0.5rem 0.5rem 0;
  background: #efefef;
  color: #4f4957;
  padding-top: 0.5rem;
  position: absolute;
  right: -2.7rem;
  top: 45%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const NullLayout = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-top: 10rem;
  color: #5a4e6a;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const LoginBtn = styled.button`
  width: 10rem;
  height: 2.4rem;
  border-radius: 3rem;
  background: white;
  color: #5a4e6a;
  font-size: 1.2rem;
  font-weight: 400;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
`;
