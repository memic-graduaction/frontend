import { useSetRecoilState } from 'recoil';
import { selectedHighLight, sideBarOpenState } from 'src/recoil/states';

// 하이라이팅된 요소에 onclick 함수 지정

export const useSetScrapFunc = () => {
  const setSelected = useSetRecoilState(selectedHighLight);
  const elements = document.querySelectorAll('[class^="scraped "]');
  const setSideBarOpen = useSetRecoilState(sideBarOpenState);

  elements.forEach((elem) => {
    const sentenceId = elem.classList[1];
    const text = elem.textContent;
    elem.addEventListener('click', () => {
      setSelected({ sentenceId: Number(sentenceId), phrase: text });
      setSideBarOpen(true);
    });
  });
};
