import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  type: string;
  user: string;
  amount: number;
};

const initialState: TInitialState[] = [
  {
    type: "create",
    user: "UrGnxf",
    amount: 0.02,
  },
  {
    type: "sell",
    user: "DEreghd",
    amount: 0.15,
  },
  {
    type: "buy",
    user: "SWtyqqw",
    amount: 1.15,
  },
  {
    type: "create",
    user: "dORtew",
    amount: 0.02,
  },
  {
    type: "sell",
    user: "BHjiue",
    amount: 2.05,
  },
  {
    type: "buy",
    user: "HZytsdt",
    amount: 0.45,
  },
  {
    type: "buy",
    user: "SWqqwp",
    amount: 1.15,
  },
  {
    type: "create",
    user: "ORtiew",
    amount: 0.02,
  },
  {
    type: "sell",
    user: "BHjue",
    amount: 2.05,
  },
  {
    type: "buy",
    user: "HZsdoot",
    amount: 0.45,
  },
];

export const sidebarActionsSlice = createSlice({
  name: "sidebarActions",
  initialState,
  reducers: {
    filter: (state, action) => {},
    addTransaction: (state, action) => {
      state = [...state, action.payload]
    },
  },
});

export const { filter, addTransaction } = sidebarActionsSlice.actions;
