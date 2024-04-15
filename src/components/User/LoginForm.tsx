import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaCheckSquare, FaRegSquare } from 'react-icons/fa';
import * as S from './Styles';

function LoginForm() {
    const navigator = useNavigate();
    const handleLoginClick = () => {
        navigator('/mypage');
    }

    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <S.Container>
            <S.TitleText>Login</S.TitleText>
            <S.IdBox>
                <S.Input type="text" placeholder="Mail" />
            </S.IdBox>
            <S.PwBox>
                <S.Input type={showPassword ? "text" : "password"} placeholder="Password" />
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
