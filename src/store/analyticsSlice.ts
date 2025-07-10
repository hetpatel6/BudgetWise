import { createSlice } from '@reduxjs/toolkit';

interface AnalyticsState {
  insights: string[];
  spendingPatterns: any[];
}

const initialState: AnalyticsState = {
  insights: [],
  spendingPatterns: [],
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {},
});

export default analyticsSlice.reducer;