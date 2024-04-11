import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Logo } from '../../utils/Icons';
import * as S from './Styles';

function LoginPage() {
    const navigator = useNavigate();
    const handleClick = () => {
        navigator('/');
    };
    const handleLoginClick = () => {
        navigator('/mypage');
    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <S.Layout>
            <S.Container>
                <S.IndexContainer>
                    <S.LogoLayout onClick={handleClick}>
                        <Logo />
                        Me.Mic
                    </S.LogoLayout>
                    <S.IndexText>Welcome<br/>Back !</S.IndexText>
                </S.IndexContainer>
                <S.LoginContainer>
                    <S.TitleText>Login</S.TitleText>
                    <S.IdBox>
                        <S.Input type="text" placeholder="User ID" />
                    </S.IdBox>
                    <S.PwBox>
                        <S.Input type={showPassword ? "text" : "password"} placeholder="Password" />
                        <S.PwBtn onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                        </S.PwBtn>
                    </S.PwBox>
                    <S.LoginBtn onClick={handleLoginClick}>Login</S.LoginBtn>
                </S.LoginContainer>
            </S.Container>
        </S.Layout>
    );
}

export default LoginPage;
