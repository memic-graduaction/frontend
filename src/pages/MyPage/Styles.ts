import styled from 'styled-components';
import Colors from 'src/styles/Colors';


export const Layout = styled.div`
    background: ${Colors.BgMPMain};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background: #DBDBDB;
    width: 95%;
    height: 90vh;
    border-radius: 20px;
    padding: 10px;
`

export const ContentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    width: 25%;
    height: 100%;
    border-radius: 20px;
`;

export const LogoLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  gap: 0.5rem;
  margin-top: 30px;
`;


export const IndexLayout = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 15px;
  padding: 10px;
  margin-top: 30px;
`;

export const MenuItem = styled.div<{ isActive?: boolean }>`
  padding: 15px;
  background-color: ${(props) => props.isActive ? '#80C0F2' : 'transparent'}; /* 활성화된 아이템에 배경색 적용 */
  color: ${(props) => props.isActive ? '#FFFFFF' : '#000000'}; /* 활성화된 아이템에 텍스트 색상 변경 */
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const MenuItemText = styled.span`
  margin-left: 30px;
`;