/* eslint-disable react/display-name */
import React, { lazy, Suspense } from 'react';

const loadable = (importFunc: () => Promise<any>, { fallback = null }: { fallback: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null }) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

loadable.displayName = "Loadable"

export default loadable;
