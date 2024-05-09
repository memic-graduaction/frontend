import React from 'react';
import { useRecoilState } from 'recoil';
import { showOverall } from 'src/recoil/states';
import styled from 'styled-components';

type Props = {
  overall: boolean;
};

const ToggleBtn = () => {
  const [isOverall, setIsOverall] = useRecoilState(showOverall);
  return (
    <>
      <CheckBox id="toggle" hidden onChange={() => setIsOverall(!isOverall)} />
      <ToggleSwitch htmlFor="toggle" overall={isOverall}>
        <Text overall={!isOverall}>이 영상의 표현 보기</Text>
        <Text overall={isOverall}>모든 표현 보기</Text>
        <ToggleButton overall={isOverall} />
      </ToggleSwitch>
    </>
  );
};

export default ToggleBtn;

const ToggleSwitch = styled.label<Props>`
  width: 25rem;
  height: 2.25rem;
  border-radius: 3.125rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background: white;
  box-shadow: 1px 1px 10px rgba(0 0 0 / 15%);
  cursor: pointer;
  transition: all 0.1s ease-in;
`;

const ToggleButton = styled.span<Props>`
  width: 13rem;
  height: 2.25rem;
  border-radius: 3.125rem;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.overall ? '12.5rem' : '0')};
  transform: translateY(-50%);
  background: #9f93af;
  transition: all 0.2s ease-in;
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
`;

const Text = styled.div<Props>`
  font-size: 1.1rem;
  font-weight: ${(props) => (props.overall ? '500' : '300')};
  color: ${(props) => (props.overall ? 'white' : '#9f93af')};
  transition: all 0.2s ease-in;
  z-index: 1;
`;
