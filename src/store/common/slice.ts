import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

import {TCommonState} from './type';

const initialState: TCommonState = {
  loading: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    resetAction: () => initialState,
  },
});

export const {reducer: commonReducer, actions: commonActions} = commonSlice;

const commonPersistConfig = {
  key: 'CommonReducer',
  storage: AsyncStorage,
  whitelist: [''],
};

export default persistReducer(commonPersistConfig, commonSlice.reducer);
