import { useQuery } from 'react-query';
import { Outlet } from 'react-router';
import { Container, createStyles } from '@mantine/core';
import { fetchJSONData } from '../utils/ApiRequestHandler';
import SideNavbar from './SideNavbar/SideNavbar';

// - La limitación del proxy de Rapidapi hace que no sea válido tener info en la primera
// carga de la página debido a la dificultad en obtener multiples recursos sin recurrir
// a multiples llamadas a la API.
// - Diseñar página con info inicial/placeholder.

const useStyles = createStyles(() => ({
  pageContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  displayContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  }
}));

function ExplorePage() {
  const { classes } = useStyles();

  const { isLoading, error, data } = useQuery('deezer', () => fetchJSONData('charts'));

  console.log('data:', data);

  return (
    <Container className={classes.pageContainer}>
      <SideNavbar />
      <Container className={classes.displayContainer}>
        <div>EXPLORE PAGE</div>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error!</div>}
        {data && <Outlet />}
      </Container>
    </Container>
  );
}

export default ExplorePage;
