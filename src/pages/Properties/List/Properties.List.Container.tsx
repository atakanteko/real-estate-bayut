import React from 'react';

import Filter from '@/components/Filter';
import { FilterUtil } from '@/utils/filter/filterData';

const PropertiesListContainer = () => {
  return (
    <div>
      <Filter data={FilterUtil.propertyFilterData} />
    </div>
  );
};

export default PropertiesListContainer;
