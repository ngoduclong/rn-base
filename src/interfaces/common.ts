import {ESortType} from '@src/helpers/enum';

export type TSelectItem = {
  label: string;
  value: string;
};

export type TCommonGetListParams = {
  page: number;
  size: number;
  keyword?: string;
  sortBy?: string;
  sortType?: ESortType;
};

export type TPagination = {
  currentPage: number;
  totalPage: number;
  totalRecord: number;
  pageSize?: number;
};

export type TCommonGetListResponse<T = any> = TPagination & {
  data: T;
};
