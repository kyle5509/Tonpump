import { createSlice } from "@reduxjs/toolkit"

type TUser = {
    id: number | null
    name: string
    username: string 
    walletAddress: string
}

const initialState: TUser = {
    id: 4294967295,
    name: 'Daniel',
    username: 'krixhdi',
    walletAddress: '0x5626ajaas2kzdxas8msnvch88',
}


export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: ({
       loginUser: (state, action) => {
        const {name, wallet_address, id} = action.payload
        state.id = id 
        state.name = name 
        state.walletAddress = wallet_address
       } ,
       logoutUser: (state) => {
        state = initialState
       }
    })
})

export const { loginUser, logoutUser} = UserSlice.actions
