import React from 'react';

import { Col, Input, Select } from 'antd';

import { FiltersTypeSpace } from '@/types/filter';

type InputGeneratorProps = {
  item: FiltersTypeSpace.FilterCategory;
  handleChange: (options: any) => void;
};

const InputGenerator = ({ item, handleChange }: InputGeneratorProps) => {
  const renderInput = () => {
    switch (item.type) {
      case 'select':
        return (
          <Col xs={item?.columnSize?.xs || 24} md={item?.columnSize?.md || 6}>
            {item.items && (
              <Select
                labelInValue
                defaultValue={{
                  value: item.items[0].value,
                  label: item.items[0].label as FiltersTypeSpace.QueryNameParam,
                }}
                style={{ width: '100%' }}
                onChange={(e) =>
                  handleChange({ name: item.queryName, value: e.value })
                }
                options={item?.items}
              />
            )}
          </Col>
        );
      case 'input':
        return (
          <Col xs={item?.columnSize?.xs || 24} md={item?.columnSize?.md || 6}>
            <Input
              placeholder={item.placeholder}
              onChange={(e) =>
                handleChange({ name: item.queryName, value: e.target.value })
              }
            />
          </Col>
        );
      default:
        return null;
    }
  };

  return renderInput();
};

export default InputGenerator;
