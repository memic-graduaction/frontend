import React from 'react';
import styled from 'styled-components';

interface Prop {
  dataId: number;
  data: string;
  queries?: Map<number, number[][]>;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  textColor?: string;
}

interface TextProp {
  textColor?: string;
}

const HightLightText = ({ dataId, data, queries, onClick, textColor }: Prop) => {
  if (queries && queries.has(Number(dataId))) {
    const indexlist = queries.get(Number(dataId));
    const result: React.ReactNode[] = [];

    indexlist?.reduce((_, [start, end], currIdx) => {
      result.push(<NomalText>{data.slice(0, start)}</NomalText>);
      result.push(<HighlightedText>{data.slice(start, end)}</HighlightedText>);
      if (currIdx === indexlist.length - 1) {
        result.push(<NomalText>{data.slice(end)}</NomalText>);
      }
      return _;
    }, undefined);
    return (
      <TextBox onClick={onClick} textColor={textColor}>
        {result}
      </TextBox>
    );
  }
  return (
    <TextBox onClick={onClick} textColor={textColor}>
      <NomalText>{data}</NomalText>
    </TextBox>
  );
};

export default HightLightText;

const NomalText = styled.text`
  margin-right: 5px;
`;

const HighlightedText = styled(NomalText)`
  background: #ffe9b0;
  display: flex;
  user-select: none;
`;

const TextBox = styled.div<TextProp>`
  width: 33rem;
  height: auto;
  display: flex;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 500;
  margin-left: 3%;
  line-height: 1.5;
  word-break: break-all;
  color: ${(props) => (props.textColor ? props.textColor : '#696565')};
`;
