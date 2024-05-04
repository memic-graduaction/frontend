import React, { useEffect, useState } from 'react';
import { Close } from 'src/assets/Icons';
import { phraseList, selectedPhrase, selectedTags, sideBarOpenState } from 'src/recoil/states';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { getTagColor } from 'src/utils/getTagColor';
import axios from 'axios';
import { getSelectedPhrase } from 'src/utils/getSelectedPhrase';
import * as S from './Styles';
import TagSelector from '../TagSelector/TagSelector';

interface Props {
  phrase: string;
}

const BaseUrl = process.env.REACT_APP_BASE_URL;

const PhraseEditCard = ({ phrase }: Props) => {
  const [list, setList] = useRecoilState(phraseList);
  const setPhrase = useSetRecoilState(selectedPhrase);
  const [meaning, setMeaning] = useState('');
  const [defaultMean, setDefaultMean] = useState('');
  const [tags, setTags] = useRecoilState(selectedTags);
  const setSideBarOpen = useSetRecoilState(sideBarOpenState);
  const { changeTextStyle, resetSelection } = getSelectedPhrase();
  const serverUrl = `${BaseUrl}/v1/translate`;

  const handleGetMeaning = async () => {
    try {
      const response = await axios.post(serverUrl, { phrase });
      setDefaultMean(response.data.meaningInKorean);
    } catch (e) {
      alert(e);
    }
  };

  const saveInputValue = (e) => {
    setMeaning(e.target.value);
  };

  const handleDeleteTag = (idx: number) => {
    const newTags = [...tags];
    newTags.splice(idx, 1);
    setTags(newTags);
  };

  const handleSubmit = () => {
    const finalMean = meaning || defaultMean;
    const obj = { sentence: phrase, meaning: finalMean, tags };
    const newList = [...list];
    newList.unshift(obj);
    setList(newList);
    setPhrase('');
    // 스크립트의 저장된 부분 하이라이팅
    changeTextStyle();
  };

  const handleClose = () => {
    resetSelection();
    setPhrase('');
    setSideBarOpen(false);
  };

  useEffect(() => {
    setTags([]);
    handleGetMeaning();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <S.Layout>
        <S.IconBox>
          <Close width={15} height={15} onClick={handleClose} />
        </S.IconBox>
        <S.PhraseBox>{phrase}</S.PhraseBox>
        <input placeholder={defaultMean} onChange={saveInputValue} />
        <S.HashTagBox>
          {tags.map((v, i) => (
            <S.HashTag key={v} style={{ background: getTagColor(i) }}>
              #{v}
              <Close onClick={() => handleDeleteTag(i)} style={{ cursor: 'pointer' }} />
            </S.HashTag>
          ))}
          <TagSelector />
        </S.HashTagBox>
        <S.ButtonBox>
          <S.SubmitBtn onClick={() => setPhrase('')}>취소</S.SubmitBtn>
          <S.SubmitBtn type="submit">완료</S.SubmitBtn>
        </S.ButtonBox>
      </S.Layout>
    </form>
  );
};

export default PhraseEditCard;
