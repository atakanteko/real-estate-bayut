import { FilterUtil } from "@/utils/filter/filterData";
declare namespace FiltersTypeSpace {
    type ColumnTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

    type FilterItem = {
        label: string;
        value: string;
    };

    type FilterCategory = {
        items?: FilterItem[];
        placeholder: string;
        queryName: string;
        type: 'select' | 'input' | 'date'
        columnSize?: Partial<Record<ColumnTypes, number>>
    };

    type FilterData = FilterCategory[];

    type QueryNameParam = typeof FilterUtil.propertyQueryNames[number]

    type QueryNames = Record<QueryNameParam, number | string>

    interface IFilterState {
        filterName: Partial<QueryNames>
    }

    type FilterUpdatePayloadType = {
        name: QueryNameParam;
        value: number | string
    }
}

export type { FiltersTypeSpace }
