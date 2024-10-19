import { createSlice } from "@reduxjs/toolkit";

type TSidebar = {
  show: boolean 
  type: string
}

const initialState: TSidebar = {
  show: true,
  type: "",
};

export const SidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    showSideBar: (state) => {
      state.show = true;
    },
    hideSideBar: (state) => {
      state.show = false;
    },
    showMainSideBar: (state) => {
        state.type = 'main'
    },
    showMarketSideBar: (state) => {
        state.type = 'market'
    }
  },
});


export const {hideSideBar, showMainSideBar,showMarketSideBar, showSideBar} = SidebarSlice.actions