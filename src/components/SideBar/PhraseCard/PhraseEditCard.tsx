import React, { useEffect, useState } from 'react';
import { Close } from 'src/assets/Icons';
import { scrapedPhrase, scriptIDstate, selectedPhrase, selectedTags, sideBarOpenState } from 'src/recoil/states';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { getTagColor } from 'src/utils/getTagColor';
import axios from 'axios';
import { getSelectedPhrase } from 'src/utils/getSelectedPhrase';
import * as S from './Styles';
import TagSelector from '../TagSelector/TagSelector';

interface Props {
  phrase?: string;
}

const PhraseEditCard = ({ phrase }: Props) => {
  const [list, setList] = useRecoilState(scrapedPhrase);
  const setPhrase = useSetRecoilState(selectedPhrase);
  const sentenceId = useRecoilValue(scriptIDstate);
  const [meaning, setMeaning] = useState('');
  const [defaultMean, setDefaultMean] = useState('');
  const [tags, setTags] = useRecoilState(selectedTags);
  const setSideBarOpen = useSetRecoilState(sideBarOpenState);
  const { startIndex, endIndex, resetSelection, changeTextStyle } = getSelectedPhrase();
  // const token = process.env.REACT_APP_ACCESS_TOKEN;

  const handleGetMeaning = async () => {
    try {
      const response = await axios.post('/v1/translate', { phrase });
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
    const obj = { sentenceId, startIndex: 0, endIndex: 4, meaning: finalMean, tags };
    const newList = [...list];
    newList.unshift(obj);
    setList(newList);
    setPhrase('');
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
        <S.SubmitBtn onClick={() => handleSubmit()}>완료</S.SubmitBtn>
      </S.ButtonBox>
    </S.Layout>
  );
};

export default PhraseEditCard;
