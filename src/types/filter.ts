import { FilterUtil } from "@/utils/filter/filterData";

type FilterItem = {
    label: string;
    value: string;
};

type FilterCategory = {
    items: FilterItem[];
    placeholder: string;
    queryName: string;
};


declare namespace FiltersTypeSpace {
    type FilterData = FilterCategory[];

    type QueryNameParam = typeof FilterUtil.queryNames[number]

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
