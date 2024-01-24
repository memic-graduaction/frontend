import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { scriptExpendState } from 'src/recoil/states';
import * as S from './Styles';

interface Props {
  id: number;
  time: string;
  script: string;
}

function Script() {
  const isExpanded = useRecoilValue(scriptExpendState);
  const [data, setData] = useState<Props[] | null>(null);
  const handleGetScript = async () => {
    try {
      const response = await axios.get('http://localhost:3000/script');
      setData(response.data);
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
            <S.FocusTime>{v.time}</S.FocusTime>
            <S.FocusText>{v.script}</S.FocusText>
          </S.TextLayout>
        ))}
    </S.Layout>
  ) : (
    <S.Layout>
      {data &&
        data.map((v) => (
          <S.TextLayout key={v.id}>
            <S.FocusTime>{v.time}</S.FocusTime>
            <S.FocusText>{v.script}</S.FocusText>
          </S.TextLayout>
        ))}
    </S.Layout>
  );
}

export default Script;
