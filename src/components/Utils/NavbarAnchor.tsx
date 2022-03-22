import { Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';

type navbarPropType = {
  route: string,
  text: string,
  styleClasses: string
};

function NavbarAnchor(props: navbarPropType) {
  const {
    route, text, styleClasses
  } = props;

  return (
    <Anchor
      className={styleClasses}
      component={Link}
      to={route}
    >
      {text}
    </Anchor>
  );
}

export default NavbarAnchor;
