import { createSlice } from '@reduxjs/toolkit';

interface SettingsState {
  currency: string;
  notifications: boolean;
  theme: 'light' | 'dark';
}

const initialState: SettingsState = {
  currency: 'USD',
  notifications: true,
  theme: 'light',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
});

export default settingsSlice.reducer;