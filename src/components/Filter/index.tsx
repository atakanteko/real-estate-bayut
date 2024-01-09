import React from 'react';

import { Select } from 'antd';

import { FilterActions } from '@/features';
import { useAppDispatch } from '@/hooks';
import { FiltersTypeSpace } from '@/types/filter';
import { FilterUtil } from '@/utils/filter/filterData';

const Filter = () => {
  const [filterList, setFilterList] =
    React.useState<FiltersTypeSpace.FilterData>([]);
  const dispatch = useAppDispatch();

  const handleChange = (options: {
    value: string | number;
    label: FiltersTypeSpace.QueryNameParam;
    title?: FiltersTypeSpace.QueryNameParam;
  }) => {
    dispatch(
      FilterActions.updateFilter({ name: options.title!, value: options.value })
    );
  };

  React.useEffect(() => {
    const transformedArray: FiltersTypeSpace.FilterData =
      FilterUtil.filterData.map((filterItem) => {
        return {
          placeholder: filterItem.placeholder,
          queryName: filterItem.queryName,
          items: filterItem.items.map((item) => ({
            label: item.label,
            value: item.value,
            title: filterItem.queryName,
          })),
        };
      });
    setFilterList(transformedArray);
  }, []);

  {
    return filterList?.map((item, index) => {
      return (
        <Select
          labelInValue
          key={index}
          defaultValue={{
            value: item.items[0].value,
            label: item.items[0].label as FiltersTypeSpace.QueryNameParam,
          }}
          style={{ width: 120 }}
          onChange={handleChange}
          options={item?.items}
        />
      );
    });
  }
};

export default Filter;
