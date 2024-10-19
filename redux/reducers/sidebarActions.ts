import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  type: string;
  user: string;
  amount: number;
};

const initialState: TInitialState[] = [
  {
    type: "create",
    user: "UGnxf",
    amount: 0.02,
  },
  {
    type: "sell",
    user: "DEred",
    amount: 0.15,
  },
  {
    type: "buy",
    user: "SWqqw",
    amount: 1.15,
  },
  {
    type: "create",
    user: "ORtew",
    amount: 0.02,
  },
  {
    type: "sell",
    user: "BHjue",
    amount: 2.05,
  },
  {
    type: "buy",
    user: "HZsdt",
    amount: 0.45,
  },
];

export const sidebarActionsSlice = createSlice({
  name: "sidebarActions",
  initialState,
  reducers: {
    filter: (state, action) => {
     
    },
  },
});

export const { filter } = sidebarActionsSlice.actions;
