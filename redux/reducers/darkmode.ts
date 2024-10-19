import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: true
}


export const DarkmodeSlice = createSlice({
    name: 'darkmode',
    initialState,
    reducers: ({
        toggleDarkmode: (state) => {
            state.value = !state.value
            console.log(state.value)
            return state
        }
    })
})

export const { toggleDarkmode } = DarkmodeSlice.actions