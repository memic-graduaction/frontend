import React from 'react';
import styled from 'styled-components';

interface Prop {
  placeholder: string;
}

function SearchBar({ placeholder }: Prop) {
  return <Layout placeholder={placeholder} />;
}

export default SearchBar;

const Layout = styled.input`
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
