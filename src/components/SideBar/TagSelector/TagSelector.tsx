import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedTags } from 'src/recoil/states';
import styled from 'styled-components';

const TagSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Tags, setTags] = useRecoilState(selectedTags);
  const OPTIONS = [
    { value: 'tag1', name: 'tag1' },
    { value: 'tag2', name: 'tag2' },
    { value: 'tag3', name: 'tag3' },
    { value: 'tag4', name: 'tag4' },
    { value: 'tag5', name: 'tag5' },
    { value: 'tag6', name: 'tag6' },
  ];
  const handleClickOption = (value: string) => {
    setTags([...Tags, value]);
  };
  return (
    <SelectBox onClick={() => setIsOpen(!isOpen)}>
      +
      {isOpen ? (
        <OptionList>
          {OPTIONS.map((opt) => (
            <OptionItem key={opt.value} value={opt.value} onClick={() => handleClickOption(opt.value)}>
              {opt.name}
            </OptionItem>
          ))}
        </OptionList>
      ) : null}
    </SelectBox>
  );
};

export default TagSelector;

const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 5rem;
  height: 1.7rem;
  gap: 0.625rem;
  border-radius: 3rem;
  background: #858585;
  color: white;
`;

const OptionList = styled.ul`
  position: absolute;
  top: 1.7rem;
  left: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 8rem;
  border: 1px solid #858585;
  border-radius: 0.5rem;
  background: white;
  color: #858585;
  padding: 0 0.1rem;
  z-index: 1;
`;

const OptionItem = styled.li`
  height: 1.7rem;
  width: 100%;
  padding-top: 0.1rem;
  text-align: center;
  &:hover {
    background: rgba(133, 133, 133, 0.24);
    cursor: pointer;
  }
`;
