import {
  TCommonGetListParams,
  TCommonGetListResponse,
  TPagination,
} from '@src/interfaces/common';

export const DESIGN_WIDTH = 390;
export const DESIGN_HEIGHT = 844;

export const REGEX_CHECK_MAIL =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

export const DEFAULT_PHONE_MASK = '+84 000 000 000';

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;

export const DEFAULT_GET_LIST_PARAMS: TCommonGetListParams = {
  page: DEFAULT_PAGE,
  size: DEFAULT_PAGE_SIZE,
  keyword: '',
};

export const DEFAULT_PAGINATION: TPagination = {
  currentPage: 1,
  totalPage: 1,
  totalRecord: 1,
};

export const DEFAULT_GET_LIST_RESPONSE: TCommonGetListResponse = {
  ...DEFAULT_PAGINATION,
  data: [],
};
