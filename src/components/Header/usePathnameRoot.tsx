import { useLocation } from 'react-router';

function usePathnameRoot(): string {
  const { pathname } = useLocation();
  const pathnameRoot = `${pathname.split('/')[2] || '/indeezer-react/'}`;

  return pathnameRoot;
}

export default usePathnameRoot;
