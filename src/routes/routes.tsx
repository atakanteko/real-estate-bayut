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
        path: '/properties',
        element: LazyLoader(
          React.lazy(() => import('@/pages/Properties/List'))
        ),
      },
      {
        path: '/properties/:id',
        element: LazyLoader(
          React.lazy(() => import('@/pages/Properties/Detail'))
        ),
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
