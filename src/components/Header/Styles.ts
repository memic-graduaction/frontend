import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
  height: 4.4rem;
  padding: 0 3rem;
  color: white;
`;

export const LogoLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  gap: 0.5rem;
`;

export const MenuLayout = styled.div`
  width: 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
`;

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.1rem;
`;

export const IconBox = styled.div`
  margin-right: 0.5rem;
  padding-top: 0.1rem;
`;
