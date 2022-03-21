import { useQuery } from 'react-query';
import { Container } from '@mantine/core';
import { fetchJSONData } from '../utils/ApiRequestHandler';

// - La limitación del proxy de Rapidapi hace que no sea válido tener info en la primera
// carga de la página debido a la dificultad en obtener multiples recursos sin recurrir
// a multiples llamadas a la API.
// - Diseñar página con info inicial/placeholder.

function ExplorePage() {
  const { isLoading, error, data } = useQuery('deezer', () => fetchJSONData('charts'));

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
