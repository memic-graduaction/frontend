import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  youtubeLinkState,
  scriptIDstate,
  scriptSentencestate,
  modalActivationState,
  recordingState,
} from 'src/recoil/states';
import * as S from './Styles';
import Modal from '../Modal/Modal';

interface Props {
  id: number;
  startPoint: string;
  sentence: string;
}

function Script() {
  const url = useRecoilState(youtubeLinkState);
  const [data, setData] = useState<Props[] | null>(null);
  const handleGetScript = async () => {
    const formData = {
      url: `${url}`,
    };
    try {
      const response = await axios.post('http://13.125.213.188:8080/v1/transcriptions', formData);
      setData(response.data.sentences);
    } catch (e) {
      console.log(e);
    }
  };

  const setScriptIDState = useSetRecoilState(scriptIDstate);
  const setScriptSentencestate = useSetRecoilState(scriptSentencestate);
  const handleRightLayoutClick = (id: number, sentence: string) => {
    setScriptIDState(id);
    setScriptSentencestate(sentence);
    setIsModalOpen(true);
  };

  const setRecordingState = useSetRecoilState(recordingState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalActivationState);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setRecordingState('inactive');
  };

  useEffect(() => {
    handleGetScript();
  }, []);

  return (
    <S.Layout>
      {isModalOpen && <Modal onClose={() => handleCloseModal()} />}
      <S.ButtonContainer>
        <S.ScriptSmall>Script</S.ScriptSmall>
        <S.DownLoadBtn>Download</S.DownLoadBtn>
      </S.ButtonContainer>
      <S.Border />
      {data &&
        data.map((v) => (
          <S.TextLayout key={v.id}>
            <S.FocusTime>{v.startPoint}</S.FocusTime>
            <S.FocusText>{v.sentence}</S.FocusText>
            <S.RightLayout onClick={() => handleRightLayoutClick(v.id, v.sentence)}>
              <S.RecordIcon />
              <S.RecordText>Rec</S.RecordText>
            </S.RightLayout>
          </S.TextLayout>
        ))}
    </S.Layout>
  );
}

export default Script;
