import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { scriptExpendState, youtubeLinkState } from 'src/recoil/states';
import * as S from './Styles';

interface Sentence {
  id: number;
  startPoint: string;
  sentence: string;
}

interface ApiResponse {
  id: number;
  url: string;
  sentences: Sentence[];
}

function Script() {
  const isExpanded = useRecoilValue(scriptExpendState);
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

  useEffect(() => {
    handleGetScript();
  }, []);

  return isExpanded ? (
    <S.Layout style={{ height: `${90}%` }}>
      {data &&
        data.map((v) => (
          <S.TextLayout key={v.id}>
            <S.FocusTime>{v.startPoint}</S.FocusTime>
            <S.FocusText>{v.sentence}</S.FocusText>
          </S.TextLayout>
        ))}
    </S.Layout>
  ) : (
    <S.Layout>
      {data &&
        data.map((v) => (
          <S.TextLayout key={v.id}>
            <S.FocusTime>{v.startPoint}</S.FocusTime>
            <S.FocusText>{v.sentence}</S.FocusText>
          </S.TextLayout>
        ))}
    </S.Layout>
  );
}

export default Script;
