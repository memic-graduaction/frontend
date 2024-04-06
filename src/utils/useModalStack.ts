import { useCallback } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { modalStackState } from 'src/recoil/states';

export const useModalStack = () => {
  const setModalStack = useSetRecoilState(modalStackState);

  const push = useCallback(
    (modalComponent) => {
      setModalStack((modalStack) => [...modalStack, modalComponent]);
    },
    [setModalStack],
  );

  const remove = useCallback(
    (key) => {
      setModalStack((modalStack) => modalStack.filter((modalComponent) => modalComponent.key !== key));
    },
    [setModalStack],
  );

  const pop = useCallback(() => {
    setModalStack((modalStack) => modalStack.slice(0, -1));
  }, [setModalStack]);

  const clear = useResetRecoilState(modalStackState);

  return { push, pop, remove, clear };
};
