// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducer/rootReducer';  // Update the path

const store = configureStore({
    reducer: rootReducer,
});

export default store;
