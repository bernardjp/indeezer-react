import { useQuery } from 'react-query';
import { Container } from '@mantine/core';
import fetchData from '../utils/ApiRequestHandler';

function ExplorePage() {
  const pathname: string = 'artist/27';
  const { isLoading, error, data } = useQuery('deezer', () => fetchData(pathname));

  console.log('data:', data);

  return (
    <Container>
      <div>EXPLORE PAGE</div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error!</div>}
      {data && <div>Data from the server</div>}
    </Container>
  );
}

export default ExplorePage;
