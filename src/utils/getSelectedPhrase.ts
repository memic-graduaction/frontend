export const getSelectedPhrase = () => {
  // 선택된 범위에 selection 객체 생성
  const sel = window.getSelection();

  function resetSelection() {
    sel.setPosition(startNode, 0);
  }

  // 요소 & 인덱스
  const startNode = sel.anchorNode;
  const endNode = sel.focusNode;
  let startIndex = sel.anchorOffset;
  let endIndex = sel.focusOffset;
  const wholeText = startNode?.textContent;
  let phrase = null;

  // 한 지점 클릭한 경우는 예외 처리
  if (startIndex === endIndex || startIndex > endIndex) {
    resetSelection();
  } else {
    startIndex =
      wholeText.slice(0, startIndex + 1).lastIndexOf(' ') > 0
        ? wholeText.slice(0, startIndex + 1).lastIndexOf(' ') + 1
        : 0;
    endIndex =
      wholeText.slice(endIndex - 1).indexOf(' ') === -1
        ? wholeText.length
        : endIndex + wholeText.slice(endIndex - 1).indexOf(' ') - 1;
    sel.setBaseAndExtent(startNode, startIndex, endNode, endIndex);
    phrase = sel.toString().replace(/\n/g, ' ');
  }
  return { phrase, startIndex, endIndex, resetSelection };
};
