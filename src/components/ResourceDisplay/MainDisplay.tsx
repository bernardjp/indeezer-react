import { useLocation } from 'react-router-dom';

function MainDisplay() {
  const location = useLocation();
  const resourceType:string = location.pathname.split('/')[2];
  console.log(resourceType);

  return (
    <p>{`${resourceType} display`}</p>
  );
}

export default MainDisplay;
