import React from 'react';
import { useRecoilState } from 'recoil';
import { showOverall } from 'src/recoil/states';
import styled from 'styled-components';

type Props = {
  $overall: boolean;
};

const ToggleBtn = () => {
  const [isOverall, setIsOverall] = useRecoilState(showOverall);
  return (
    <>
      <CheckBox id="toggle" hidden onChange={() => setIsOverall(!isOverall)} />
      <ToggleSwitch htmlFor="toggle" $overall={isOverall}>
        <Text $overall={!isOverall}>이 영상의 표현 보기</Text>
        <Text $overall={isOverall}>모든 표현 보기</Text>
        <ToggleButton $overall={isOverall} />
      </ToggleSwitch>
    </>
  );
};

export default ToggleBtn;

const ToggleSwitch = styled.label<Props>`
  width: 18rem;
  height: 2rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background: white;
  cursor: pointer;
  transition: all 0.1s ease-in;
  border: 1px solid #d7d7d7;
`;

const ToggleButton = styled.span<Props>`
  width: 10rem;
  height: 2rem;
  border-radius: 0.8rem;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.$overall ? '9rem' : '0')};
  transform: translateY(-50%);
  background: #c56697;
  transition: all 0.2s ease-in;
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.3),
    inset -2px -2px 5px rgba(0, 0, 0, 0.1),
    inset 2px 2px 5px rgba(255, 255, 255, 0.2);
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
`;

const Text = styled.div<Props>`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${(props) => (props.$overall ? 'white' : '#5a4e6a;')};
  transition: all 0.2s ease-in;
  z-index: 1;
`;
