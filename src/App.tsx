import { Routes, Route } from 'react-router-dom';
import AppContainer from './components/AppContainer';
import Footer from './components/Footer/Footer';
import AboutPage from './components/About.page';
import ExplorePage from './components/Explore.page';

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="about" element={<AboutPage />} />
        <Route path="/*" element={<ExplorePage />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
