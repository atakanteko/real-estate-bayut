import React from 'react';

import { Flex, Typography } from 'antd';

const PropertyListPageBanner = () => {
  return (
    <Flex
      gap={1}
      vertical
      align="center"
      justify="center"
      style={{ paddingTop: '88px', paddingBottom: '30px' }}
    >
      <Typography.Title level={1}>Search Property By Filters</Typography.Title>
      <Typography.Text
        style={{ lineHeight: '34px', fontSize: '18px', fontWeight: '400' }}
      >
        Choose from the most advantageous offers
      </Typography.Text>
    </Flex>
  );
};

export default PropertyListPageBanner;
