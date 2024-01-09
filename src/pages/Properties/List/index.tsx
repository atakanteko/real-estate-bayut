import { Col, Row } from 'antd';

import { usePropertyListQuery } from '@/api/properties/properties.api';
import Filter from '@/components/Filter';
// import propertiesApi from '@/api/properties/properties.api';
import PropertyItem from '@/components/Pages/Properties/List/PropertyItem';
import GlobalSpinner from '@/components/UI/Loader';
import { FilterUtil } from '@/utils/filter/filterData';
const PropertyList = () => {
  // const propertyListFetch = propertiesApi.endpoints.propertyList;

  // const { data, isLoading } = usePropertyListQuery({
  //   locationExternalIDs: '5002,6020',
  // });

  // if (isLoading) {
  //   return <GlobalSpinner isLoading={isLoading} isFullscreen />;
  // }
  return (
    <div className="wrapper">
      <Row gutter={[24, 24]}>
        <Filter />
        {/* {[]?.hits.map((item) => (
          <Col xs={24} sm={12} lg={8} key={item.id}>
            <PropertyItem propertyFeatures={item} />
          </Col>
        ))} */}
      </Row>
    </div>
  );
};

export default PropertyList;
