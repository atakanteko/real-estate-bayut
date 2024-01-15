import React from 'react';

import { Button, Col, Flex, Result, Row } from 'antd';

import GlobalSpinner from '@/components/UI/Loader';
import { FilterActions, getPropertyList } from '@/features';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { IStore } from '@/store/IStore';

import PropertyItem from './PropertyItem';

const PropertyList = ({ showSpinner = true }: { showSpinner: boolean }) => {
  const dispatch = useAppDispatch();
  const propertyList = useAppSelector((state: IStore) =>
    getPropertyList(state)
  );

  if (showSpinner) {
    return (
      <Flex align="center" justify="center" style={{ paddingTop: '40px' }}>
        <GlobalSpinner isLoading={true} />
      </Flex>
    );
  }

  if (!showSpinner && propertyList.length === 0) {
    return (
      <Result
        status="info"
        title="No Data"
        subTitle="No data was found to display."
        extra={
          <Button onClick={() => dispatch(FilterActions.resetFilter())}>
            Reset Filters
          </Button>
        }
      />
    );
  }
  return (
    <div className="wrapper" style={{ paddingTop: '40px' }}>
      <Row gutter={[24, 24]}>
        {propertyList?.map((item) => (
          <Col xs={24} sm={12} lg={8}>
            <PropertyItem propertyFeatures={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PropertyList;
