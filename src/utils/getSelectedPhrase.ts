import { useSetRecoilState } from 'recoil';
import { selectedPhrase } from 'src/recoil/states';

export const getSelectedPhrase = () => {
  const setSelectedPhrase = useSetRecoilState(selectedPhrase);

  const selectedObj = window.getSelection();
  const phrase = selectedObj.toString();

  setSelectedPhrase(phrase);

  const startIndex = selectedObj.anchorOffset;
  const endIndex = selectedObj.focusOffset;
  return { phrase, startIndex, endIndex };
};
