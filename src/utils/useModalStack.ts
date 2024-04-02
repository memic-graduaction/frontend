import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { modalStackState } from 'src/recoil/states';

export const useModalStack = () => {
  const setModalStack = useSetRecoilState(modalStackState);

  const push = (modalComponent) => {
    setModalStack((modalStack) => [...modalStack, modalComponent]);
  };

  const remove = (key) => {
    setModalStack((modalStack) => modalStack.filter((modalComponent) => modalComponent.key !== key));
  };

  const pop = () => {
    setModalStack((modalStack) => modalStack.slice(0, -1));
  };

  const clear = useResetRecoilState(modalStackState);

  return { push, pop, remove, clear };
};
