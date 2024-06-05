import React from 'react';
import styled from 'styled-components';

interface Prop {
  placeholder: string;
  setQueries: (arg1: string[]) => void;
}

function SearchBar({ placeholder, setQueries }: Prop) {
  const onChange = (e) => {
    setQueries([e.target.value]);
  };
  return <Input placeholder={placeholder} onChange={onChange} />;
}

export default SearchBar;

const Input = styled.input`
  width: 68rem;
  height: 3.7rem;
  padding-left: 2rem;
  border-radius: 2rem;
  border: 1px solid #a0a0a0;
  &::placeholder {
    color: #a0a0a0;
    font-size: 1.1rem;
  }
`;
