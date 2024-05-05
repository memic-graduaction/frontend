import React from 'react';
import styled from 'styled-components';

interface Prop {
  items: { id: number; sentence: string }[];
  queries?: Map<number, number[][]>;
}

const HightLightText = ({ items, queries }: Prop) => (
  <TextBox>
    {items.map((item) => {
      if (queries && queries.has(Number(item.id))) {
        const indexlist = queries.get(Number(item.id));
        const result: React.ReactNode[] = [];
        indexlist?.reduce((_, [start, end], currIdx) => {
          result.push(<NomalText>{item.sentence.slice(0, start)}</NomalText>);
          result.push(<HighlightedText>{item.sentence.slice(start, end)}</HighlightedText>);
          if (currIdx === indexlist.length - 1) {
            result.push(<NomalText>{item.sentence.slice(end)}</NomalText>);
          }
          return _;
        }, undefined);
        return result;
      }
      return <NomalText>{item.sentence}</NomalText>;
    })}
  </TextBox>
);

export default HightLightText;

const NomalText = styled.div`
  margin-right: 5px;
`;

const HighlightedText = styled.div`
  margin-right: 5px;
  background: #ffe9b0;
  display: flex;
  user-select: none;
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  grid-auto-flow: dense;
  color: black;
  background: white;
`;
