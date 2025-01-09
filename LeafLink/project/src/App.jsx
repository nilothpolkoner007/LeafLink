import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import PlantTreesPage from './pages/PlantTreesPage';
import ReducePlasticPage from './pages/ReducePlasticPage';
import CommunityPage from './pages/CommunityPage';
import ShopPage from './pages/ShopPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AuthPage from './pages/auth/AuthPage';
import { useAuthStore } from './stores/authStore';

function App() {
  const user = useAuthStore(state => state.user);

  return (
    <BrowserRouter>
      <div className='min-h-screen bg-green-50'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/%20PlantTreesPage' element={<PlantTreesPage />} />
          <Route path='/plastic' element={<ReducePlasticPage />} />
          <Route path='/community' element={<CommunityPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/auth' element={<AuthPage />} />
          {user && user.role === 'admin' && <Route path='/admin/*' element={<AdminDashboard />} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;