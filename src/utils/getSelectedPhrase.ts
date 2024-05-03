export const getSelectedPhrase = () => {
  // 선택된 범위에 selection 객체 생성
  const sel = window.getSelection();
  // 범위 객체
  const range = sel.getRangeAt(0);
  // 선택된 텍스트
  const phrase = sel.toString();
  // 시작 지점 인덱스
  const startIndex = sel.anchorOffset;
  // 끝나는 지점의 인덱스
  const endIndex = sel.focusOffset;

  let content = null;

  if (startIndex > endIndex) sel.removeAllRanges();
  else content = range.extractContents();

  // 범위를 startIndex부터 endIndex로 설정해야함

  // 선택된 텍스트 스타일 변경
  if (content) {
    const span = document.createElement('span');
    span.appendChild(content);
    span.style.background = '#FFE9B0';
    range.insertNode(span);
  }

  return { phrase, startIndex, endIndex };
};

//
