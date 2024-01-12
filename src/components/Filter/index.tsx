import React, { CSSProperties } from 'react';

import { Col, Flex, Row, Select } from 'antd';

import { FilterActions } from '@/features';
import { useAppDispatch } from '@/hooks';
import { FiltersTypeSpace } from '@/types/filter';

import InputGenerator from './InputGenerator';

const Filter = ({
  data,
  style,
}: {
  data: FiltersTypeSpace.FilterData;
  style: CSSProperties;
}) => {
  const [filterList, setFilterList] =
    React.useState<FiltersTypeSpace.FilterData>([]);

  const dispatch = useAppDispatch();

  const handleChange = ({
    name,
    value,
  }: {
    name: string;
    value: string | number;
  }) => {
    dispatch(
      FilterActions.updateFilter({
        name: name as FiltersTypeSpace.QueryNameParam,
        value: value,
      })
    );
  };

  React.useMemo(() => {
    const transformedArray: FiltersTypeSpace.FilterData = data.map(
      (filterItem) => {
        return {
          type: filterItem.type,
          placeholder: filterItem.placeholder,
          queryName: filterItem.queryName,
          columnSize: filterItem.columnSize,
          items: filterItem?.items?.map((item) => ({
            label: item.label,
            value: item.value,
            title: filterItem.queryName,
          })),
        };
      }
    );
    setFilterList(transformedArray);
  }, [data]);

  {
    return (
      <div style={{ ...style }}>
        <div className="wrapper">
          <Row gutter={[12, 12]}>
            {filterList?.map((item, index) => (
              <InputGenerator
                item={item}
                key={index}
                handleChange={handleChange}
              />
            ))}
          </Row>
        </div>
      </div>
    );
  }
};

export default Filter;
