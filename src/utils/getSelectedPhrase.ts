export const getSelectedPhrase = () => {
  const selectedObj = window.getSelection();
  const phrase = selectedObj.toString();
  const startIndex = selectedObj.anchorOffset;
  const endIndex = selectedObj.focusOffset;
  return { phrase, startIndex, endIndex };
};
