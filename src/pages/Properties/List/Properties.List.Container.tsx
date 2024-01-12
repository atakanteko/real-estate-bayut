import React from 'react';
import { useDispatch } from 'react-redux';

import { Col, Row } from 'antd';

import propertiesApi from '@/api/properties/properties.api';
import Filter from '@/components/Filter';
import PropertyItem from '@/components/Pages/Properties/List/PropertyItem';
import GlobalSpinner from '@/components/UI/Loader';
import { getFilterParams, propertyActions } from '@/features';
import { useAppSelector } from '@/hooks';
import { FilterUtil } from '@/utils/filter/filterData';

const PropertiesListContainer = () => {
  const filterParams = useAppSelector(getFilterParams);
  const dispatch = useDispatch();
  const propertyListFetch = propertiesApi.endpoints.propertyList;
  const [getPropertyList, result, lastPromiseInfo] =
    propertyListFetch.useLazyQuery();

  React.useMemo(async () => {
    const response = await getPropertyList({ ...filterParams });
    if (response.data?.hits && !response.isError) {
      dispatch(propertyActions.updatePropertList(response.data.hits));
    }
  }, [filterParams, getPropertyList, dispatch]);

  // if (propertyData.isLoading && !propertyData.data.hits.length) {
  //   return <GlobalSpinner isLoading={propertyData.isLoading} isFullscreen />;
  // }

  return (
    <div>
      <Filter data={FilterUtil.propertyFilterData} />
      {}
      {/* <Row gutter={[24, 24]}>
        {propertyData?.data?.hits?.map((item) => (
          <Col xs={24} sm={12} lg={8} key={item.id}>
            <PropertyItem propertyFeatures={item} />
          </Col>
        ))}
      </Row> */}
    </div>
  );
};

export default PropertiesListContainer;
