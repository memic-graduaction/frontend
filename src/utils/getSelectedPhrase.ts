export const getSelectedPhrase = () => {
  // 선택된 범위에 selection 객체 생성
  const sel = window.getSelection();
  const range = sel.getRangeAt(0);

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
  let content = null;

  // 한 지점 클릭한 경우는 예외 처리
  if (startIndex === endIndex || startIndex > endIndex) {
    resetSelection();
  } else {
    startIndex = wholeText.slice(0, startIndex + 1).lastIndexOf(' ');
    endIndex =
      wholeText.slice(endIndex - 1).indexOf(' ') === -1
        ? wholeText.length
        : endIndex + wholeText.slice(endIndex - 1).indexOf(' ');
    sel.setBaseAndExtent(startNode, startIndex, endNode, endIndex);
    phrase = sel.toString().replace(/\n/g, ' ');
    content = range.cloneContents();
  }

  function changeTextStyle() {
    if (content !== null) {
      sel.deleteFromDocument();
      const clonedContent = content;
      const div = document.createElement('div');
      div.className = 'scraped';
      div.style.position = 'relative';

      // 표현 보기 버튼
      const button = document.createElement('button');
      const buttonName = document.createTextNode('표현 보기');
      button.appendChild(buttonName);
      button.className = 'scraped';
      div.append(button, clonedContent);
      range.insertNode(div);
    }
  }

  return { phrase, startIndex, endIndex, changeTextStyle, resetSelection };
};
