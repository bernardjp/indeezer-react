// eslint-disable-next-line no-unused-vars
import { Routes, Route, useLocation } from 'react-router-dom';
import { Container, createStyles } from '@mantine/core';
import { fetchJSONData } from '../utils/ApiRequestHandler';
import SideNavbar from './SideNavbar/SideNavbar';
import RequestHandler from './RequestHandler/RequestHandler';
import ChartListContainer from './DisplayContainer/ChartListContainer';
import Header from './Header/Header';

// - La limitación del proxy de Rapidapi hace que no sea válido tener info en la primera
// carga de la página debido a la dificultad en obtener multiples recursos sin recurrir
// a multiples llamadas a la API.
// - Diseñar página con info inicial/placeholder.

const useStyles = createStyles((theme) => ({
  pageContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0',
    maxWidth: '100%',
    minHeight: '100vh',
    padding: '0'
  },
  displayContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    maxWidth: '100%',
    margin: '0',
    marginLeft: '220px',
    padding: '0',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: '0px'
    }
  }
}));

function ExplorePage() {
  const { classes } = useStyles();
  const { pathname } = useLocation();
  const resourceType:string | undefined = pathname.split('/')[2];

  return (
    <Container className={classes.pageContainer}>
      <SideNavbar />
      <Container className={classes.displayContainer}>
        <Header withSearchBar />
        {resourceType === undefined
            && (
            <RequestHandler
              queryOptions={resourceType}
              queryCallback={fetchJSONData}
              RenderComponent={ChartListContainer}
            />
            )}
        <Routes>
          {/*
            <Route path="artists" element={<RequestHandler queryOptions={resourceType} />} />
            <Route path="albums" element={<RequestHandler queryOptions={resourceType} />} />
            <Route path="tracks" element={<RequestHandler queryOptions={resourceType} />} />
            <Route path="playlists" element={<RequestHandler queryOptions={resourceType} />} />
            <Route path="podcasts" element={<RequestHandler queryOptions={resourceType} />} />
            */}
        </Routes>
      </Container>
    </Container>
  );
}

export default ExplorePage;
