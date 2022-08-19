import { Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';

type navbarPropType = {
  route: string,
  children: string | React.ReactNode,
  styleClasses: string
};

function NavbarAnchor(props: navbarPropType) {
  const {
    route, children, styleClasses
  } = props;

  return (
    <Anchor
      className={styleClasses}
      component={Link}
      to={route}
    >
      {children}
    </Anchor>
  );
}

export default NavbarAnchor;
