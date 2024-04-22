import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../utils/Icons';
import * as S from './Styles';
import LoginForm from '../../components/User/LoginForm';
import SignupForm from '../../components/User/SignUpForm';

function LoginPage() {
    const navigator = useNavigate();
    const handleClick = () => {
        navigator('/');
    };
    
    const [isSignUp, setIsSignUp] = useState(false);
    const handleSignUpClick = () => {
        setIsSignUp(true);
    };
    
    return (
        <S.Layout>
            <S.Container>
                <S.IndexContainer>
                    <S.LogoLayout onClick={handleClick}>
                        <Logo />
                        Me.Mic
                    </S.LogoLayout>
                    <S.IndexText style={{ whiteSpace: "pre-wrap" }}>{isSignUp ? "Join\nUs!" : "Welcome\nBack !"}</S.IndexText>
                </S.IndexContainer>
                <S.LoginContainer>
                    {isSignUp ? <SignupForm /> : <LoginForm />}
                    {!isSignUp && (
                        <S.SignUpContainer>
                            New User?
                            <S.SignUpLink onClick={handleSignUpClick}>Sign Up</S.SignUpLink>
                        </S.SignUpContainer>
                    )}
                </S.LoginContainer>
                
            </S.Container>
        </S.Layout>
    );
}

export default LoginPage;
