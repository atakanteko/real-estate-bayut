import React from 'react';
import { useDispatch } from 'react-redux';

import { Col, Row } from 'antd';

import propertiesApi from '@/api/properties/properties.api';
import Filter from '@/components/Filter';
import PropertyListPageBanner from '@/components/Pages/Properties/List/Banner';
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

  // React.useMemo(async () => {
  //   const response = await getPropertyList({ ...filterParams });
  //   if (response.data?.hits && !response.isError) {
  //     dispatch(propertyActions.updatePropertList(response.data.hits));
  //   }
  // }, [filterParams, getPropertyList, dispatch]);

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
      {}
      {/* <Row gutter={[24, 24]}>
        {propertyData?.data?.hits?.map((item) => (
          <Col xs={24} sm={12} lg={8} key={item.id}>
            <PropertyItem propertyFeatures={item} />
          </Col>
        ))}
      </Row> */}
    </>
  );
};

export default PropertiesListContainer;