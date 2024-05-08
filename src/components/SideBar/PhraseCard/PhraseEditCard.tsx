import React, { useEffect, useRef, useState } from 'react';
import { Close } from 'src/assets/Icons';
import {
  scrapedPhrase,
  scriptIDstate,
  scriptSentencestate,
  selectedPhrase,
  selectedTags,
  sideBarOpenState,
} from 'src/recoil/states';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { getTagColor } from 'src/utils/getTagColor';
import axios from 'axios';
import { getSelectedPhrase } from 'src/utils/getSelectedPhrase';
import { getPhraseIndex } from 'src/utils/getPhraseIndex';
import { userToken } from 'src/recoil/selectors';
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
  const { resetSelection } = getSelectedPhrase();
  const inputRef = useRef<HTMLInputElement>(null);
  const scriptSentence = useRecoilValue(scriptSentencestate);
  const { startIndex, endIndex } = getPhraseIndex(scriptSentence, phrase);
  const token = useRecoilValue(userToken);

  const handleGetMeaning = async () => {
    try {
      const response = await axios.post('/v1/translate', { phrase });
      setDefaultMean(response.data.meaningInKorean);
    } catch (e) {
      alert(e);
    }
  };

  const onChange = (e) => {
    setMeaning(e.target.value);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleDeleteTag = (idx: number) => {
    const newTags = [...tags];
    newTags.splice(idx, 1);
    setTags(newTags);
  };

  const handleSubmit = async () => {
    const finalMean = meaning || defaultMean;
    const tagIds = tags.map((tag) => tag.id);
    const tagName = tags.map((tag) => tag.name);
    const data = {
      sentence: phrase,
      sentenceId,
      startIndex,
      endIndex,
      meaning: finalMean,
      tagIds,
    };
    const obj2 = { sentence: phrase, sentenceId, startIndex, endIndex, meaning: finalMean, tags: tagName };
    try {
      const response = await axios.post('v1/phrases', data, {
        headers: {
          Authorization: token,
        },
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
    const newList = [...list];
    newList.unshift(obj2);
    setList(newList);
    setPhrase('');
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
      <input ref={inputRef} placeholder={defaultMean} value={meaning} onChange={onChange} />
      <S.HashTagBox>
        {tags
          .map((v) => v.name)
          .map((v, i) => (
            <S.HashTag key={v} style={{ background: getTagColor() }}>
              #{v}
              <Close width={12} height={12} onClick={() => handleDeleteTag(i)} style={{ cursor: 'pointer' }} />
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
