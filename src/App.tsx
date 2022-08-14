import { Routes, Route } from 'react-router-dom';
import AppContainer from './components/AppContainer';
import Footer from './components/Footer/Footer';
import AboutPage from './components/About.page';
import HomePage from './components/Home.page';
import ExplorePage from './components/Explore.page';

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="explore/*" element={<ExplorePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
