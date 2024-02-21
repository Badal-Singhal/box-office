import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/starred" element={<Starred />} />
            {/* <Route path="*" element={<div>Not found</div>} /> */}
          </Route>

          {/* <Route path="/" element={<Home/>}/> */}

          <Route path="/shows/:showId" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
