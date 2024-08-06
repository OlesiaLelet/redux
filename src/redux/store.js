import { configureStore } from '@reduxjs/toolkit';
import postDataReducer from './postDataSlice';

export const store = configureStore({

  reducer: {
   postData : postDataReducer
  },
  
})
