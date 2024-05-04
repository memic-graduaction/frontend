export const getSelectedPhrase = () => {
  // 선택된 범위에 selection 객체 생성
  const sel = window.getSelection();

  // 시작 요소 & 인덱스
  const startNode = sel.anchorNode;
  const startIndex = sel.anchorOffset;
  // 끝 요소 & 인덱스
  const endNode = sel.focusNode;
  const endIndex = endNode.nodeValue?.length ?? 0;
  const focusIndex = sel.focusOffset;

  let range = null;
  let phrase = null;
  let content = null;

  function resetSelection() {
    sel.setPosition(startNode, 0);
  }

  // 한 지점 클릭한 경우는 예외 처리
  if (startNode === endNode && startIndex === focusIndex) {
    resetSelection();
  } else {
    // 자동 단어 전체 선택
    sel.setBaseAndExtent(startNode, 0, endNode, endIndex);
    range = sel.getRangeAt(0);
    phrase = sel.toString().replace(/\n/g, ' ');
    content = range.cloneContents();
  }

  function changeTextStyle() {
    if (content !== null) {
      sel.deleteFromDocument();
      const clonedContent = content;
      const div = document.createElement('div');
      div.className = 'selected';
      div.appendChild(clonedContent);
      range.insertNode(div);
    }
  }

  return { phrase, startIndex, endIndex, changeTextStyle, resetSelection };
};

//
