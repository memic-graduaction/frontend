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

export const RightBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopContainer = styled.div`
  height: 55%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 2rem;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const BtmContainer = styled.div`
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const ScriptSmall = styled.div`
  color: #6c6c6c;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ScriptBig = styled(ScriptSmall)`
  font-size: 2.5rem;
  font-weight: 700;
`;

export const StyledScrap = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 0.5rem;
`;

export const DownLoadBtn = styled.button`
  color: #6c6c6c;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
`;

export const Border = styled.div`
  width: 100%;
  height: 0.0625rem;
  background: #c9c9c9;
  margin: 1rem 0;
`;

export const PlayerContainer = styled.div`
  width: 30rem;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
`;
