import { Routes, Route } from 'react-router-dom';
import GeneralLayoutContainer from './components/GeneralLayoutContainer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutPage from './components/About.page';
import HomePage from './components/Home.page';
import ExplorePage from './components/Explore.page';

function App() {
  return (
    <GeneralLayoutContainer>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="explore/*" element={<ExplorePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </GeneralLayoutContainer>
  );
}

export default App;
