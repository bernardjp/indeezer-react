import { useState } from 'react';
import { useHover } from '@mantine/hooks';

type useBurgerButtonType = {
  isOpened: boolean,
  isHovered: boolean,
  setOpened: React.Dispatch<React.SetStateAction<boolean>>,
  hoverRef: React.MutableRefObject<HTMLDivElement>
}

function useBurgerButton(): useBurgerButtonType {
  const [isOpened, setOpened] = useState(false);
  const { hovered, ref } = useHover();

  const burgerButton: useBurgerButtonType = {
    isOpened, isHovered: hovered, setOpened, hoverRef: ref
  };

  return burgerButton;
}

export default useBurgerButton;
