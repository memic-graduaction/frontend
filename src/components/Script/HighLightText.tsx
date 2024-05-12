import React from 'react';
import styled from 'styled-components';
import Highlighter from 'react-highlight-words';
import { useRecoilValue } from 'recoil';
import { highLightPhrase } from 'src/recoil/states';

interface Prop {
  dataId: number;
  data: string;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  textColor?: string;
}
interface TextProp {
  $textcolor?: string;
}

const HighLightText = ({ dataId, data, onClick, textColor }: Prop) => {
  const phrases = useRecoilValue(highLightPhrase);
  const queries = phrases.filter((item) => item.id === dataId).map((item) => item.phrase);
  return (
    <TextLayout onClick={onClick} $textcolor={textColor}>
      <Highlighter highlightClassName={`scraped ${dataId}`} searchWords={queries} textToHighlight={data} autoEscape />
    </TextLayout>
  );
};

export default HighLightText;

const TextLayout = styled.div<TextProp>`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 500;
  margin-left: 3%;
  line-height: 1.5;
  color: ${(props) => (props.$textcolor ? props.$textcolor : '#696565')};
`;
