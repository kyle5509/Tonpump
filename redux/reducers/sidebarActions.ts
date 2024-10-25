import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  type: string;
  user: string;
  id: number;
  amount: number;
};

const initialState: TInitialState[] = [
  {
    type: "create",
    user: "UrGnxf",
    amount: 0.02,
    id: 1,
  },
  {
    type: "sell",
    user: "DEreghd",
    amount: 0.15,
    id: 2,

  },
  {
    type: "buy",
    user: "SWtyqqw",
    amount: 1.15,
    id: 3,

  },
  {
    type: "create",
    user: "dORtew",
    amount: 0.02,
    id: 4,

  },
  {
    type: "sell",
    user: "BHjiue",
    amount: 2.05,
    id: 5,
  },
  {
    type: "buy",
    user: "HZytsdt",
    amount: 0.45,
    id:6,
  },
  {
    type: "buy",
    user: "SWqqwp",
    amount: 1.15,
    id: 7,
  },
  {
    type: "create",
    user: "ORtiew",
    amount: 0.02,
    id: 8,
  },
  {
    type: "sell",
    user: "BHjue",
    amount: 2.05,
    id: 9,
  },
  {
    type: "buy",
    user: "HZsdoot",
    amount: 0.45,
    id: 10,
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
