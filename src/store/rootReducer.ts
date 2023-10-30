import {combineReducers} from '@reduxjs/toolkit';

import {loadingReducer} from './loading';

export const rootReducer = combineReducers({
  loading: loadingReducer,
});
