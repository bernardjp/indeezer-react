import { useState, useCallback } from 'react';

type useBurgerButtonType = {
  isOpened: boolean,
  onSetOpen: () => void
}

function useBurgerButton(): useBurgerButtonType {
  const [isOpened, setOpened] = useState(false);
  const onSetOpen = useCallback((): void => setOpened((opened) => !opened), [setOpened]);

  const useBurgerMenu = {
    isOpened,
    onSetOpen
  };

  return useBurgerMenu;
}

export default useBurgerButton;
