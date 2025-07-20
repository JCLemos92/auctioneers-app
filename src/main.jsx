import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AuctionCarList } from './pages/AuctionCarList';
import { INITIAL_STATE } from './store/initialState';
import { StoreProvider } from './store/useStore';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider initialValues={INITIAL_STATE}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuctionCarList />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>,
);
