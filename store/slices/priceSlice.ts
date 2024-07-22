import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface PriceState {
    data: any[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: PriceState = {
    data: [],
    status: 'idle',
};

export const fetchPrices = createAsyncThunk('prices/fetchPrices', async (symbol: string) => {
    const response = await axios.get(`/api/get-prices?symbol=${symbol}`);
    return response.data;
});

const priceSlice = createSlice({
    name: 'prices',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPrices.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPrices.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchPrices.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default priceSlice.reducer;
