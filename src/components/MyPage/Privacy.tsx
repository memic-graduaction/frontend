import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { account } from 'src/recoil/states';
import { User } from '../../assets/Icons';
import ModalPasswd from './ModalPasswd';

function App() {
  const user = useRecoilValue(account);
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };
  return (
    <>
      <ModalPasswd isopen={showModal} setter={setShowModal} />
      <Container>
        <User />
        <Account>
          Account&nbsp;&nbsp;| <AccountText>{user}</AccountText>
        </Account>
        <ChangeButton onClick={handleButtonClick}>비밀번호 변경하기</ChangeButton>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 52rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: #ffffff;
  color: #000000;
  border-radius: 20px;
  margin: 5rem 7rem 0 0;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12);
`;

const Account = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const AccountText = styled(Account)`
  font-weight: 700;
`;

const ChangeButton = styled.button`
  width: 15rem;
  height: 3.5rem;
  border-radius: 1rem;
  background: #6c6c6c;
  color: white;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  margin-top: 1rem;
`;
