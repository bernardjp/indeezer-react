import { useLocation } from 'react-router';

function usePathnameRoot(): string {
  const { pathname } = useLocation();
  const pathnameRoot = `/${pathname.split('/')[1]}`;

  return pathnameRoot;
}

export default usePathnameRoot;
