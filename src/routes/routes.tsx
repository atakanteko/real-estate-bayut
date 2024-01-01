import React from 'react';
import { useRoutes } from 'react-router-dom';

import LazyLoader from '@/components/UI/LazyLoader';
import AppLayout from '@/layout/layout';
import { IRoute } from '@/types';

const routeTree: IRoute[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: '/offers',
        element: LazyLoader(React.lazy(() => import('@/pages/List/index'))),
      },
    ],
  },
  {
    path: '*',
    element: LazyLoader(React.lazy(() => import('@/pages/NotFound'))),
  },
];

const Router = () => {
  const routes = useRoutes(routeTree);
  return routes;
};

export default Router;
