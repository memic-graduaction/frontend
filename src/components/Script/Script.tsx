import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { scriptExpendState } from 'src/recoil/states';
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
  const [data, setData] = useState<ApiResponse | null>(null);
  const [inputUrl] = useState<string>('');

  const handleGetScript = async () => {
    try {
      const response = await axios.post<ApiResponse>('http://localhost:3000/v1/transcription', {
        url: inputUrl,
      });

      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetScript();
  }, []);

  return isExpanded ? (
    <S.Layout style={{ height: `${90}%` }}>
      {data &&
        data.sentences.map((sentence) => (
          <S.TextLayout key={sentence.id}>
            <S.FocusTime>{sentence.startPoint}</S.FocusTime>
            <S.FocusText>{sentence.sentence}</S.FocusText>
          </S.TextLayout>
        ))}
    </S.Layout>
  ) : (
    <S.Layout>
      {data &&
        data.sentences.map((sentence) => (
          <S.TextLayout key={sentence.id}>
            <S.FocusTime>{sentence.startPoint}</S.FocusTime>
            <S.FocusText>{sentence.sentence}</S.FocusText>
          </S.TextLayout>
        ))}
    </S.Layout>
  );
}

export default Script;
