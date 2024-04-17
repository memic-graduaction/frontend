import React, { useEffect, useState } from 'react';
import { Close } from 'src/assets/Icons';
import { phraseList, selectedPhrase, selectedTags } from 'src/recoil/states';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { getTagColor } from 'src/utils/getTagColor';
import * as S from './Styles';
import TagSelector from '../TagSelector/TagSelector';

interface Props {
  phrase: string;
}

const PhraseEditCard = ({ phrase }: Props) => {
  const [list, setList] = useRecoilState(phraseList);
  const setPhrase = useSetRecoilState(selectedPhrase);
  const defaultMean = '자동으로 추천된 뜻입니다';
  const [meaning, setMeaning] = useState(defaultMean);
  const [tags, setTags] = useRecoilState(selectedTags);

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
  };

  useEffect(() => {
    setTags([]);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <S.Layout>
        <S.IconBox>
          <Close width={15} height={15} onClick={() => setPhrase('')} />
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
