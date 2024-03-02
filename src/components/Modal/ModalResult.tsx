import React from 'react';
import { Microphone, PlayBtn } from 'src/utils/Icons';
import styled from 'styled-components';

function ModalResult() {
  return (
    <Layout>
      <div>
        <GreyText>*기존 문장</GreyText>
        <OriginalText>
          that we’ve had this morning that in the last hour a very powerful earthquake has struck
        </OriginalText>
      </div>
      <div>
        <RedText>*내가 말한 문장</RedText>
        <RecognizedText>
          that we’ve had this money that in the last owl a very powerful earth cake has struck
        </RecognizedText>
      </div>
      <BtnLayout>
        <BtnBox>
          <PlayBtn />
          나의 발음 듣기
        </BtnBox>
        <BtnBox>
          <Microphone width="27px" height="27px" />
          다시 녹음하기
        </BtnBox>
      </BtnLayout>
    </Layout>
  );
}

export default ModalResult;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;

const RedText = styled.div`
  width: 100%;
  color: #ff5c5c;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const GreyText = styled(RedText)`
  color: #757575;
`;

const OriginalText = styled.div`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.3;
`;

const RecognizedText = styled(OriginalText)`
  width: 42rem;
  display: flex;
  align-items: center;
  border-radius: 0.9375rem;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  font-size: 1.3rem;
`;

const BtnLayout = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 2rem;
`;

const BtnBox = styled.button`
  width: 11.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.94rem;
  border: 0.05px solid #757575;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 350;
`;
