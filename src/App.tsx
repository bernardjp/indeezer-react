import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutPage from './components/About.page';
import HomePage from './components/Home.page';
import ExplorePage from './components/Explore.page';
import MainDisplay from './components/ResourceDisplay/MainDisplay';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="explore" element={<ExplorePage />}>
          <Route path="artists" element={<MainDisplay />} />
          <Route path="albums" element={<MainDisplay />} />
          <Route path="tracks" element={<MainDisplay />} />
          <Route path="playlists" element={<MainDisplay />} />
          <Route path="podcasts" element={<MainDisplay />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
