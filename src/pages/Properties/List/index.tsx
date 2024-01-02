import { Col, Row } from 'antd';

import PropertyItem from '@/components/Pages/Properties/List/PropertyItem';
import { mockPropertyItem } from '@/mock/properties';

const PropertyList = () => {
  return (
    <div className="wrapper">
      <Row gutter={[24, 24]}>
        {mockPropertyItem.map((item) => (
          <Col xs={24} sm={12} lg={8} key={item.id}>
            <PropertyItem propertyFeatures={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PropertyList;
