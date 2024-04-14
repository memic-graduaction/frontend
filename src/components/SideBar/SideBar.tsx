import React from 'react';
import styled from 'styled-components';
import { SideBarBtn, Write } from 'src/assets/Icons';
import { useRecoilState } from 'recoil';
import { sideBarOpenState } from 'src/recoil/states';
import ToggleBtn from './ToggleBtn/ToggleBtn';
import PhraseCard from './PhraseCard/PhraseCard';
import PhraseEditCard from './PhraseCard/PhraseEditCard';

type Props = {
  isOpen: boolean;
};

const SideBar = () => {
  const [isOpen, setIsOpen] = useRecoilState(sideBarOpenState);
  return (
    <>
      {isOpen ? <BackLayout onClick={() => setIsOpen(false)} /> : null}
      <Layout isOpen={isOpen}>
        {!isOpen ? (
          <IconBox onClick={() => setIsOpen(!isOpen)}>
            <SideBarBtn />
            click!
          </IconBox>
        ) : null}
        <Header>
          <Title>
            표현 저장소
            <Write />
          </Title>
        </Header>
        <ToggleBtn />
        <PhraseCard phrase="this is first phrase" meaning="이것은 뜻입니다" hashTags={['tag1', 'tag2', 'tag3']} />
        <PhraseEditCard phrase="this is new phrase" />
      </Layout>
    </>
  );
};

export default SideBar;

export const BackLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const Layout = styled.div<Props>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? '0' : '-30rem')};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 0 0.625rem 0.625rem 0;
  height: 100vh;
  width: 30rem;
  background: #efefef;
  padding: 1.5rem;
  padding-right: 0.5rem;
  transition: all 0.2s ease-in;
  z-index: 3;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.1875rem;
  color: #4f4957;
  font-size: 1.25rem;
  font-weight: 500;
`;

const IconBox = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.2rem;
  width: 3rem;
  height: 7rem;
  border-radius: 0 0.5rem 0.5rem 0;
  background: #efefef;
  color: #4f4957;
  padding-top: 0.5rem;
  position: absolute;
  right: -2.7rem;
  top: 45%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
