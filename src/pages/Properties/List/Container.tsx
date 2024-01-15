import React from 'react';
import { useDispatch } from 'react-redux';

import propertiesApi from '@/api/properties/properties.api';
import Filter from '@/components/Filter';
import PropertyListPageBanner from '@/components/Pages/Properties/List/Banner';
import PropertyList from '@/components/Pages/Properties/List/PropertyList';
import { getFilterParams, propertyActions } from '@/features';
import { useAppSelector } from '@/hooks';
import { FilterUtil } from '@/utils/filter/filterData';

const PropertiesListContainer = () => {
  const filterParams = useAppSelector(getFilterParams);
  const dispatch = useDispatch();
  const propertyListFetch = propertiesApi.endpoints.propertyList;
  const [getPropertyList, result] = propertyListFetch.useLazyQuery();

  React.useMemo(async () => {
    const response = await getPropertyList({ ...filterParams });
    if (response.data?.hits && !response.isError) {
      dispatch(propertyActions.updatePropertList(response.data.hits));
    }
  }, [filterParams, getPropertyList, dispatch]);

  return (
    <>
      <PropertyListPageBanner />
      <Filter
        data={FilterUtil.propertyFilterData}
        style={{
          background: '#F3F3FA',
          paddingTop: '40px',
          paddingBottom: '40px',
        }}
      />
      <PropertyList showSpinner={result.isFetching} />
    </>
  );
};

export default PropertiesListContainer;
