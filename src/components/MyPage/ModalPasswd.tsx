import React, { useState } from 'react';
import styled from 'styled-components';
import { Close } from 'src/assets/Icons';
import axios from 'axios';
import { UUid } from 'src/recoil/states';
import { useRecoilValue } from 'recoil';

interface Prop {
  isopen: boolean;
  setter: (arg: boolean) => void;
}

const ModalPasswd = ({ isopen, setter }: Prop) => {
  const user = useRecoilValue(UUid);
  const [password, setPassword] = useState('');
  const patchUrl = `/v1/passwords`;
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleClose = () => {
    setter(false);
    setPassword('');
  };
  const handleSubmit = () => {
    if (window.confirm('정말 비밀번호를 변경하시겠습니까?')) {
      axios
        .patch(
          patchUrl,
          { password },
          {
            headers: {
              Authorization: `${user.accessToken}`,
            },
          },
        )
        .then(() => {
          alert('비밀번호가 변경되었습니다');
        })
        .catch((e) => {
          alert('비밀번호 변경에 실패했습니다. 다시 한 번 시도해주세요.');
          console.log(e);
        });
    }
    setter(false);
  };

  return (
    <>
      <BackLayout style={{ display: isopen ? 'block' : 'none' }} onClick={handleClose} />
      <Layout style={{ display: isopen ? 'flex' : 'none' }}>
        <ExitBtn onClick={handleClose}>
          <Close />
        </ExitBtn>
        <TextLayout>새 비밀번호를 입력해주세요!</TextLayout>
        <FlexLayout>
          <InputBox>
            <Input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </InputBox>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </FlexLayout>
      </Layout>
    </>
  );
};

export default ModalPasswd;

const BackLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Layout = styled.div`
  width: 42rem;
  height: 22rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-left: 5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  border-radius: 1.25rem;
`;

const TextLayout = styled.div`
  width: 85%;
  display: flex;
  justify-content: flex-start;
`;

const FlexLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;

const InputBox = styled.div`
  width: 65%;
  height: 3rem;
  display: flex;
  border-radius: 1rem;
  border: 1px solid #c5c5c5;
  padding: 5px 10px;
`;

const Input = styled.input`
  height: auto;
  border: none;
  outline: none;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 1rem;
  background: #6c6c6c;
  color: white;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
`;

export const ExitBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
