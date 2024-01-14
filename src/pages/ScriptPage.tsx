import React from 'react';
import styled from 'styled-components';
import Colors from 'src/styles/Colors';
import Header from '../components/Header/Header';

export const Layout = styled.div`
  background: ${Colors.BgScript};
`;

function ScriptPage() {
  return (
    <Layout>
      <Header />
    </Layout>
  );
}

export default ScriptPage;
