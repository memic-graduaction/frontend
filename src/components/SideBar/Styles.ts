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
  top: ${(props) => (props.$isopen ? '1%' : '95%')};
  left: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 0.625rem;
  height: ${(props) => (props.$isopen ? '98vh' : '2rem')};
  width: ${(props) => (props.$isopen ? '26rem' : '10rem')};
  background: white;
  padding-top: ${(props) => (props.$isopen ? '3rem' : '0')};
  transition: all 0.2s ease-in;
  z-index: 3;
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.3),
    inset -2px -2px 5px rgba(0, 0, 0, 0.1),
    inset 2px 2px 5px rgba(255, 255, 255, 0.2);
`;

export const Header = styled.div<Props>`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.2rem;
  color: #5a4e6a;
  font-size: ${(props) => (props.$isopen ? '1.5rem' : '0.9rem')};
  font-weight: 700;
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
  right: -7rem;
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
  font-size: 1.1rem;
  font-weight: 500;
`;

export const LoginBtn = styled.button`
  width: 8rem;
  height: 2.2rem;
  border-radius: 3rem;
  background: white;
  color: #5a4e6a;
  border: 0.5px solid #d7d7d7;
  font-size: 1rem;
  font-weight: 700;
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.2),
    inset -2px -2px 5px rgba(0, 0, 0, 0.1),
    inset 2px 2px 5px rgba(255, 255, 255, 0.2);
`;
