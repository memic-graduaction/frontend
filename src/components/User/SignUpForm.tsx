import React, { useState } from 'react';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { FaEye, FaEyeSlash, FaCheck } from 'react-icons/fa';
import axios from 'axios';
import * as S from './Styles';

const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

function emailValidChk(email) {
  return pattern.test(email);
}

function SignupForm() {
  const signupUrl = '/v1/members/sign-up';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post(signupUrl, { email, password });
      console.log(response.data);
      alert('회원 가입이 완료되었습니다. \n 다시 로그인해주세요.');
      window.location.reload();
    } catch (e) {
      console.error('회원가입 실패:', e);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleMailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (!emailValidChk(newEmail)) {
      setEmailError('유효한 이메일 주소를 입력해주세요.');
      setEmailChecked(false);
    } else {
      setEmailError('');
      setEmailChecked(true);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <S.Container>
      <S.TitleText>Create Account</S.TitleText>
      <TextField
        id="standard-basic-mail"
        label="Email"
        variant="standard"
        value={email}
        onChange={handleMailChange}
        error={!!emailError}
        helperText={emailError}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <S.MailChk>{emailChecked && <FaCheck size={18} />}</S.MailChk>
            </InputAdornment>
          ),
        }}
      />
      <br />
      <TextField
        id="standard-basic-password"
        label="Password"
        variant="standard"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <S.PwBtn onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </S.PwBtn>
            </InputAdornment>
          ),
        }}
      />
      <br />
      <br />
      <S.LoginBtn onClick={handleSubmit}>Submit</S.LoginBtn>
    </S.Container>
  );
}

export default SignupForm;
