import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '@/components/Navbar/Navbar';

const AppLayout = () => {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
