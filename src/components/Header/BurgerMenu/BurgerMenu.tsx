import useBurgerButton from './useBurgerMenu';
import BurgerMenuButton from './BurgerMenuButton';
import BurgerMenuNavbar from './BurgerMenuNavbar';

function BurgerMenu() {
  const { isOpened, onSetOpen } = useBurgerButton();

  return (
    <>
      <BurgerMenuButton isOpened={isOpened} onClickHandler={onSetOpen} />
      <BurgerMenuNavbar isOpened={isOpened} />
    </>
  );
}

export default BurgerMenu;
