import React from 'react';

import { Spin } from 'antd';

const Loader = (): JSX.Element => {
  return (
    <div className="application-loader">
      <Spin size="large" />
    </div>
  );
};

const LazyLoader = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.LazyExoticComponent<any>
): React.ReactNode => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Component />
    </React.Suspense>
  );
};

export default LazyLoader;
