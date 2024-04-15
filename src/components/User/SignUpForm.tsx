import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { FaEye, FaEyeSlash, FaCheck } from 'react-icons/fa';
import axios from 'axios';
import * as S from './Styles';
  
const BaseUrl = process.env.REACT_APP_BASE_URL;

const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

function emailValidChk(email) {
    return pattern.test(email);
}
  
function SignupForm() {
    const navigator = useNavigate();
    const handleClick = async () => {
        try {
            await axios.post(`${BaseUrl}/v1/members`, { email, password });
            alert('회원 가입이 완료되었습니다. <br/> 다시 로그인해주세요.');
            navigator('/login');
        } catch (e) {
            console.log(e);
        }
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                            <S.MailChk>
                                {emailChecked && <FaCheck size={18} />}
                            </S.MailChk>
                        </InputAdornment>
                    )
                }}
            />
            <br/>
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
                    )
                }}
            />
            <br/><br/>
            <S.LoginBtn onClick={handleClick}>Submit</S.LoginBtn>
        </S.Container>
    );
}

export default SignupForm;
