import { Routes, Route } from 'react-router-dom';
import AppContainer from './components/AppContainer';
import Footer from './components/Footer/Footer';
import AboutPage from './components/About.page';
import ExplorePage from './components/Explore.page';
// import HomePage from './components/Home.page';

function App() {
  return (
    <AppContainer>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="explore/*" element={<ExplorePage />} /> */}
        <Route path="about" element={<AboutPage />} />
        <Route path="/*" element={<ExplorePage />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
