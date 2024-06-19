import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash, FaCheckSquare, FaRegSquare } from 'react-icons/fa';
import { useSetRecoilState } from 'recoil';
import { UUid, account, isLoggedInState } from '../../recoil/states';
import * as S from './Styles';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const setUserData = useSetRecoilState(UUid);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginUrl = `/v1/members/sign-in`;
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setAccount = useSetRecoilState(account);

  const handleLoginClick = async () => {
    try {
      const response = await axios.post(loginUrl, { email, password });
      setUserData(response.data);
      setIsLoggedIn(true);
      const previousPage = getCookie('previousPage');
      window.location.href = previousPage || '/';
      alert('로그인 되었습니다!');
      setAccount(email);
    } catch (e) {
      console.log('로그인 실패:', e);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  return (
    <S.Container>
      <S.TitleText>Login</S.TitleText>
      <S.IdBox>
        <S.Input type="text" placeholder="Mail" value={email} onChange={handleMailChange} />
      </S.IdBox>
      <S.PwBox>
        <S.Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <S.PwBtn onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
        </S.PwBtn>
      </S.PwBox>
      <S.AskBox>
        <S.RememberText onClick={() => setRememberMe(!rememberMe)}>
          {rememberMe ? <FaCheckSquare size={24} /> : <FaRegSquare size={24} />}
          &nbsp;&nbsp;Remember Me
        </S.RememberText>
        <S.AccountText>Forget Account</S.AccountText>
      </S.AskBox>
      <S.LoginBtn onClick={handleLoginClick}>Login</S.LoginBtn>
    </S.Container>
  );
}

export default LoginForm;
