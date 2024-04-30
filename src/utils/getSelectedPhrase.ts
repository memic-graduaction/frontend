export const getSelectedPhrase = () => {
  const obj = window.getSelection();
  const phrase = obj.toString();
  const startIndex = obj.anchorOffset;
  const endIndex = obj.focusOffset;
  const range = obj.getRangeAt(0);
  const content = range.extractContents();
  console.log(`${startIndex}: 스타트`);
  console.log(`${endIndex}:앤드`);
  console.log(`${phrase}: 문장`);

  // 선택된 텍스트 스타일 변경
  const span = document.createElement('span');
  span.appendChild(content);
  span.style.background = '#FFE9B0';
  range.insertNode(span);

  return { phrase, startIndex, endIndex };
};
