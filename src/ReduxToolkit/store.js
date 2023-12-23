import { configureStore } from '@reduxjs/toolkit';
import custing from './Reducer';

const store = configureStore({
  reducer: {
    amit: custing,
  },
});

export default store;
