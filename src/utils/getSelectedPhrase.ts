export const getSelectedPhrase = () => {
  const selectedObj = window.getSelection();
  const phrase = selectedObj.toString();
  const startIndex = selectedObj.anchorOffset;
  const endIndex = selectedObj.focusOffset;
  console.log(phrase, startIndex, endIndex);
  return { phrase, startIndex, endIndex };
};
