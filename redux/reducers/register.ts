import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    values: {
        firstname: '',
        lastname: '',
        username: '',
        wallet_address: ''
    },
}

const RegisterSlice = createSlice({
    name: 'register',
    initialState,
    reducers: ({
        updateInput: (state,  action: PayloadAction<{name: 'firstname'| 'lastname'| 'username'| 'wallet_address', value: string}>) => {
            const {name, value} = action.payload
            state.values[`${name}`] = value
        }
    })
})