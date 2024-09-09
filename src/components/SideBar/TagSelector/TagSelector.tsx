import axios from 'axios';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedTags } from 'src/recoil/states';
import styled from 'styled-components';

const TagSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Tags, setTags] = useRecoilState(selectedTags);
  const [options, setOptions] = useState([]);

  const getTagList = async () => {
    try {
      const response = await axios.get('/v1/tags');
      setOptions(response.data);
    } catch (e) {
      alert(e);
    }
  };
  const handlePlusButton = () => {
    if (!isOpen) getTagList();
    setIsOpen(!isOpen);
  };

  const handleClickOption = (id: number, name: string) => {
    const tagList = [...Tags];
    tagList.push({ id, name });
    setTags(tagList);
  };
  return (
    <SelectBox onClick={handlePlusButton}>
      +
      {isOpen ? (
        <OptionList>
          {options.map((v) => (
            <OptionItem key={v.id} onClick={() => handleClickOption(v.id, v.name)}>
              {v.name}
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
  width: 4.5rem;
  height: 1.3rem;
  gap: 0.625rem;
  border-radius: 3rem;
  background: #4f4957;
  color: white;
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.3),
    inset -2px -2px 5px rgba(0, 0, 0, 0.3),
    inset 2px 2px 5px rgba(255, 255, 255, 0.2);
`;

const OptionList = styled.div`
  position: absolute;
  top: 1.7rem;
  left: 0.1rem;
  align-items: center;
  justify-content: flex-start;
  width: 8rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.2rem;
  background: white;
  color: #858585;
  padding: 0 0.1rem;
  z-index: 1;
`;

const OptionItem = styled.div`
  height: 2rem;
  padding: 0 1rem;
  padding-top: 0.5rem;
  text-align: center;
  &:hover {
    background: rgba(133, 133, 133, 0.24);
    cursor: pointer;
  }
`;
