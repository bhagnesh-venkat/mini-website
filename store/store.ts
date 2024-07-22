import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import priceReducer from './slices/priceSlice';

const makeStore = () => configureStore({
    reducer: {
        prices: priceReducer,
    },
});

export const wrapper = createWrapper(makeStore);


export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];