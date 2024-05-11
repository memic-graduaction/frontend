import { useSetRecoilState } from 'recoil';
import { selectedHighLight, sideBarOpenState } from 'src/recoil/states';

export const useSetScrapFunc = () => {
  const setSelected = useSetRecoilState(selectedHighLight);
  const isSideBarOpen = useSetRecoilState(sideBarOpenState);
  const elements = document.querySelectorAll('[class^="scraped "]');

  elements.forEach((elem) => {
    const sentenceId = elem.classList[1];
    const text = elem.textContent;
    elem.addEventListener('click', () => {
      setSelected({ sentenceId: Number(sentenceId), phrase: text });
      isSideBarOpen(true);
    });
  });
};
