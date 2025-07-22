import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/Layout';
import './index.css';
import { AuctionCarList } from './pages/AuctionCarList/AuctionCarList';
import { CarDetails } from './pages/CarDetails/CarDetails';
import { INITIAL_STATE } from './store/initialState';
import { StoreProvider } from './store/useStore';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider initialValues={INITIAL_STATE}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AuctionCarList />} />
            <Route path="/car/:licensePlate" element={<CarDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>,
);
