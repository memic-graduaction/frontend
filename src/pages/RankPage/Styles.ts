import styled from 'styled-components';
import Colors from 'src/styles/Colors';

export const Layout = styled.div`
  background: ${Colors.BgMain2};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 75rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  gap: 5rem;
  margin-top: 3rem;
`;

export const Title = styled.div`
  color: #85786d;
  font-size: 4rem;
  line-height: 1.5;
  text-align: center;
`;

export const ThumbnailLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5rem;
  color: white;
`;

export const ThumbnailBox = styled.a`
  text-decoration: none;
`;

export const Thumbnail = styled.img`
  width: 17rem;
  height: 14rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;
