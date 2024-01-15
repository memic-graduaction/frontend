import styled from 'styled-components';
import Colors from 'src/styles/Colors';

export const Layout = styled.div`
  background: ${Colors.BgScript};
`;

export const Container = styled.div`
  background: white;
  height: 80rem;
  border-radius: 3rem 3rem 0 0;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25) inset;
  padding: 5rem;
`;

export const TopContainer = styled.div`
  height: 55%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 2rem;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const RightBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
