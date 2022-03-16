import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutPage from './components/About.page';
import HomePage from './components/Home.page';
import ExplorePage from './components/Explore.page';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="explore/*" element={<ExplorePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
