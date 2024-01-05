import { Col, Row } from 'antd';

import { usePropertyListQuery } from '@/api/properties/properties.api';
import PropertyItem from '@/components/Pages/Properties/List/PropertyItem';
const PropertyList = () => {
  const { data, isLoading } = usePropertyListQuery({
    locationExternalIDs: '5002,6020',
  });

  console.log(data?.hits);
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="wrapper">
      <Row gutter={[24, 24]}>
        {data?.hits.map((item) => (
          <Col xs={24} sm={12} lg={8} key={item.id}>
            <PropertyItem propertyFeatures={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PropertyList;
