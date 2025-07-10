import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Budget {
  id: string;
  name: string;
  amount: number;
  spent: number;
  category: string;
  period: 'monthly' | 'weekly' | 'yearly';
}

interface BudgetState {
  budgets: Budget[];
}

const initialState: BudgetState = {
  budgets: [],
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addBudget: (state, action: PayloadAction<Budget>) => {
      state.budgets.push(action.payload);
    },
    updateBudget: (state, action: PayloadAction<Budget>) => {
      const index = state.budgets.findIndex(budget => budget.id === action.payload.id);
      if (index !== -1) {
        state.budgets[index] = action.payload;
      }
    },
    deleteBudget: (state, action: PayloadAction<string>) => {
      state.budgets = state.budgets.filter(budget => budget.id !== action.payload);
    },
    updateBudgetSpent: (state, action: PayloadAction<{ id: string; amount: number }>) => {
      const budget = state.budgets.find(budget => budget.id === action.payload.id);
      if (budget) {
        budget.spent += action.payload.amount;
      }
    },
  },
});

export const { addBudget, updateBudget, deleteBudget, updateBudgetSpent } = budgetSlice.actions;
export default budgetSlice.reducer;