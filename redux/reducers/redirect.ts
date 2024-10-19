import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: false
}

export const RedirectSlice = createSlice({
    name: 'redirect',
    initialState,
    reducers: ({
        stopRedirect: (state) => {
            state.value = false
        },
        startRedirect: (state) => {
            state.value = true
        }
    })
})


export const { stopRedirect, startRedirect} = RedirectSlice.actions