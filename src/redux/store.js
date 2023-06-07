import { configureStore } from '@reduxjs/toolkit';
// import { createLogger } from 'redux-logger';
import greetReducer from './greet/greetSlice';

// const logger = createLogger();

const store = configureStore({
  reducer: {
    greet: greetReducer,
  },
//   ,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
