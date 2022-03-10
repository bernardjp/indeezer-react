import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header/Header';
import AboutPage from './components/About.page';
import HomePage from './components/Home.page';
import ExplorePage from './components/Explore.page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="explore/*" element={<ExplorePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
